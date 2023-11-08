import styles from './TaskDetailsPage.module.css';

import ErrorPage from '../error/ErrorPage';
import TaskDetailForm from '../UI/forms/TaskDetailForm';
import EditModal from '../modal/editModal/EditModal';
import DeleteModal from '../modal/deleteModal/DeleteModal';
import Wrapper from '../UI/wrapper/Wrapper';
import {
  useGetTaskByIdQuery,
  useUpdateTasksMutation,
} from '../../store/TasksApi';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const TaskDetailsPage = () => {
  const { taskId } = useParams();

  const [setStatus] = useUpdateTasksMutation();
  const {
    data: taskById,
    isFetching,
    isLoading,
    error,
  } = useGetTaskByIdQuery(taskId);

  const [editView, handleSetEditView] = useState({
    statusEditView: false,
  });

  const [deleteView, handleSetDeleteView] = useState({
    statusDeleteView: false,
  });

  const handleShowEditView = (id) => {
    handleSetEditView({
      statusEditView: true,
      ...taskById,
    });
  };

  const handleShowDeleteView = (id) => {
    handleSetDeleteView({
      statusDeleteView: true,
      idElement: taskById.id,
    });
  };
  const handleChangeStatus = (id) => {
    if (taskById.status === 3) {
      setStatus({
        id: id,
        name: taskById.name,
        priority: taskById.priority,
        status: 1,
      });
    } else {
      setStatus({
        id: id,
        name: taskById.name,
        priority: taskById.priority,
        status: taskById.status + 1,
      });
    }
  };

  if (isLoading || isFetching)
    return <Spinner animation="border" variant="primary" />;

  if (error) return <ErrorPage />;

  if (taskById) {
    const taskContainer = (
      <TaskDetailForm
        key={+taskId}
        task={taskById}
        onChangeStatus={handleChangeStatus}
        onShowEditView={handleShowEditView}
        onShowDeleteView={handleShowDeleteView}
      />
    );

    return (
      <Wrapper>
        <div className={styles.container}>{taskContainer}</div>
        {editView.statusEditView && (
          <EditModal editView={editView} onSetEditView={handleSetEditView} />
        )}
        {deleteView.statusDeleteView && (
          <DeleteModal
            deleteView={deleteView}
            onSetDeleteView={handleSetDeleteView}
          />
        )}
      </Wrapper>
    );
  }
};

export default TaskDetailsPage;

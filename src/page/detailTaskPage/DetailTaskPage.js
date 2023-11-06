import styles from './DetailTaskPage.module.css';

import ErrorPage from '../ErrorPage';
import DetailTaskForm from '../../components/UI/formModal/DetailTaskForm';
import EditModal from '../../components/modal/editModal/EditModal';
import DeleteModal from '../../components/modal/deleteModal/DeleteModal';
import Wrapper from '../../components/UI/wrapper/Wrapper';
import {
  useGetTasksByIdQuery,
  useUpdateTasksMutation,
} from '../../store/TasksServerApi';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const DetailTaskPage = () => {
  const { taskId } = useParams();

  const [setStatus] = useUpdateTasksMutation();
  const {
    data: taskById,
    isFetching,
    isLoading,
    error,
  } = useGetTasksByIdQuery(taskId);

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
  const handleCheckStatus = (id) => {
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
      <DetailTaskForm
        key={+taskId}
        task={taskById}
        onCheckStatus={handleCheckStatus}
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

export default DetailTaskPage;

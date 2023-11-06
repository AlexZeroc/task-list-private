import styles from './TaskList.module.css';
import Task from './Task';

import EditModal from '../modal/editModal/EditModal';
import DeleteModal from '../modal/deleteModal/DeleteModal';
import ErrorPage from '../../page/ErrorPage';
import {
  useGetTasksQuery,
  useUpdateTasksMutation,
} from '../../store/TasksServerApi';

import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const TaskList = () => {
  const { data: tasks, isFetching, isLoading, error } = useGetTasksQuery();
  const [setStatus] = useUpdateTasksMutation();
  const [editView, handleSetEditView] = useState({
    statusEditView: false,
  });
  const [deleteView, handleSetDeleteView] = useState({
    statusDeleteView: false,
  });

  const handleShowEditView = (id) => {
    const taskElement = tasks.find((obj) => obj.id === id);

    if (!taskElement) {
      return;
    }

    handleSetEditView({
      statusEditView: true,
      ...taskElement,
    });
  };

  const handleShowDeleteView = (id) => {
    const taskElement = tasks.find((obj) => obj.id === id);
    if (!taskElement) {
      return;
    }
    handleSetDeleteView({
      statusDeleteView: true,
      idElement: taskElement.id,
    });
  };

  const handleCheckStatus = (id) => {
    const taskElement = tasks.find((obj) => obj.id === id);
    if (!taskElement) {
      return;
    }
    if (taskElement.status === 3) {
      setStatus({
        id: id,
        name: taskElement.name,
        priority: taskElement.priority,
        status: 1,
      });
    } else {
      setStatus({
        id: id,
        name: taskElement.name,
        priority: taskElement.priority,
        status: taskElement.status + 1,
      });
    }
  };

  if (isLoading || isFetching)
    return <Spinner animation="border" variant="primary" />;

  if (error) return <ErrorPage />;
  if (tasks) {
    const taskListContainer = tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onCheckStatus={handleCheckStatus}
        onShowEditView={handleShowEditView}
        onShowDeleteView={handleShowDeleteView}
      />
    ));

    return (
      <>
        <div className={styles.container}>{taskListContainer}</div>
        {editView.statusEditView && (
          <EditModal editView={editView} onSetEditView={handleSetEditView} />
        )}
        {deleteView.statusDeleteView && (
          <DeleteModal
            deleteView={deleteView}
            onSetDeleteView={handleSetDeleteView}
          />
        )}
      </>
    );
  }
};

export default TaskList;

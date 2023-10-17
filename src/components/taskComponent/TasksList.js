import styles from "./TaskList.module.css";
import Task from "./Task";

import EditModal from "../modal/editModal/EditModal";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import { useFetchTaskList } from "../../hooks/useFetchTaskList";
import { useFetchSetStatus } from "../../hooks/useFetchSetStatus";

import { useState } from "react";
import { Spinner } from "react-bootstrap";

const TaskList = () => {
  const data = useFetchTaskList();
  const setStatus = useFetchSetStatus();
  const [editView, handleSetEditView] = useState({
    statusEditView: false,
  });

  const [deleteView, handleSetDeleteView] = useState({
    statusDeleteView: false,
  });

  const handleShowEditView = (id) => {
    const taskElement = data.find((obj) => obj.id === id);

    if (!taskElement) {
      return;
    }

    handleSetEditView({
      statusEditView: true,
      ...taskElement,
    });
  };

  const handleShowDeleteView = (id) => {
    const taskElement = data.find((obj) => obj.id === id);
    if (!taskElement) {
      return;
    }
    handleSetDeleteView({
      statusDeleteView: true,
      idElement: taskElement.id,
    });
  };

  const handleCheckStatus = (id) => {
    setStatus(id);
  };

  const taskListContainer = data.map((task) => (
    <Task
      key={task.id}
      task={task}
      onCheckStatus={handleCheckStatus}
      onShowEditView={handleShowEditView}
      onShowDeleteView={handleShowDeleteView}
    />
  ));
  if (taskListContainer.length === 0) {
    return <Spinner animation="border" variant="primary"/>;
  }

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
};

export default TaskList;

import styles from "./DetailTaskPage.module.css";

import DetailTaskForm from "../../components/UI/formModal/DetailTaskForm";
import EditModal from "../../components/modal/editModal/EditModal";
import DeleteModal from "../../components/modal/deleteModal/DeleteModal";
import Wrapper from "../../components/UI/wrapper/Wrapper";
import { useFetchTaskById } from "../../hooks/useFetchTaskById";
import { useFetchSetStatus } from "../../hooks/useFetchSetStatus";
import { useFetchTaskList } from "../../hooks/useFetchTaskList";

import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailTaskPage = () => {
  const { taskId } = useParams();
  const setStatus = useFetchSetStatus();
  const taskById = useFetchTaskById(+taskId);
  const data = useFetchTaskList();

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
};

export default DetailTaskPage;

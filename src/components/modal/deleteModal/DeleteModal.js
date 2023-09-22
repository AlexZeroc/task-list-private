import { useContext } from "react";
import WrapperModal from "../../UI/wrapper/WrapperModal";
import containerStyle from "./DeleteModal.module.css";
import TaskContext from "../../../store/task-list";
const DeleteModal = () => {
  const { checkModalDeleteView, deleteTask, modalDeleteView } =
    useContext(TaskContext);

  const deleteTaskElement = () => {
    deleteTask(modalDeleteView.idElement);
    checkModalDeleteView((prevState) => ({
      ...prevState,
      statusModalDelete: false,
    }));
  };
  return (
    <WrapperModal>
      <div className={containerStyle.deleteModal}>
        <p>Are you sure you want to delete this task?</p>
        <div className={containerStyle[`deleteModal__actions`]}>
          <button onClick={deleteTaskElement} className={containerStyle.button}>
            Delete
          </button>
          <button
            className={containerStyle.outlineButton}
            onClick={() =>
              checkModalDeleteView((prevState) => ({
                ...prevState,
                statusModalDelete: false,
              }))
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </WrapperModal>
  );
};

export default DeleteModal;

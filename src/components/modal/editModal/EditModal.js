import WrapperModal from "../../UI/wrapper/WrapperModal";
import { useContext, useState } from "react";
import TaskContext from "../../../store/task-list";
import FormModal from "../../UI/formModal/FormModal";

const EditModal = () => {
  const { modalEditView, checkModalEditView, editedTask } =
    useContext(TaskContext);
  const [textTaskInput, getTextTaskInput] = useState(modalEditView.name);

  const setTaskInput = (event) => {
    getTextTaskInput(event.target.value);
  };

  const postEditFormTask = (event) => {
    event.preventDefault();
    editedTask({
      id: modalEditView.id,
      name: textTaskInput,
      priority: modalEditView.priority,
    });
    checkModalEditView((prevState) => ({
      ...prevState,
      statusModal: false,
    }));
  };

  const closeEditModal = () => {
    checkModalEditView((prevState) => ({
      ...prevState,
      statusModal: false,
    }));
  };

  const changeStatusTask = (event) => {
    let textStatusLink = event.target.firstChild.data;
    switch (textStatusLink) {
      case "high":
        checkModalEditView((prevState) => ({
          ...prevState,
          priority: 3,
        }));
        break;
      case "medium":
        checkModalEditView((prevState) => ({
          ...prevState,
          priority: 2,
        }));
        break;
      case "low":
        checkModalEditView((prevState) => ({
          ...prevState,
          priority: 1,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <WrapperModal>
      <FormModal
        priority={modalEditView.priority}
        textTaskInput={textTaskInput}
        setTaskInput={setTaskInput}
        postFormTask={postEditFormTask}
        changeStatusTask={changeStatusTask}
        closeModal={closeEditModal}
        textButton={"Edit"}
      />
    </WrapperModal>
  );
};

export default EditModal;

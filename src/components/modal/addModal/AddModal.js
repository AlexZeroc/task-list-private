import { useContext, useState } from "react";
import WrapperModal from "../../UI/wrapper/WrapperModal";
import FormModal from "../../UI/formModal/FormModal";
import TaskContext from "../../../store/task-list";

const AddModal = () => {
  const { checkModalAddView, addTask } = useContext(TaskContext);
  const [textTaskInput, getTextTaskInput] = useState("Add task text");
  const [priority, addPriority] = useState({ priority: 1 });
  const setTaskInput = (event) => {
    getTextTaskInput(event.target.value);
  };

  const postAddFormTask = (event) => {
    event.preventDefault();
    addTask({
      name: textTaskInput,
      priority: priority.priority,
      status: 1,
      id: Math.random(),
    });
    checkModalAddView((prevState) => ({
      ...prevState,
      statusAddModal: false,
    }));
  };

  const closeAddModal = () => {
    checkModalAddView((prevState) => ({ ...prevState, statusAddModal: false }));
  };

  const changeStatusTask = (event) => {
    let textStatusLink = event.target.firstChild.data;
    switch (textStatusLink) {
      case "high":
        addPriority((prevState) => ({
          ...prevState,
          priority: 3,
        }));
        break;
      case "medium":
        addPriority((prevState) => ({
          ...prevState,
          priority: 2,
        }));
        break;
      case "low":
        addPriority((prevState) => ({
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
        priority={priority.priority}
        textTaskInput={textTaskInput}
        setTaskInput={setTaskInput}
        postFormTask={postAddFormTask}
        changeStatusTask={changeStatusTask}
        closeModal={closeAddModal}
        textButton={"Add"}
      />
    </WrapperModal>
  );
};

export default AddModal;

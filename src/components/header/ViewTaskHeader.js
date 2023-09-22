import containerStyle from "./stylesStore/ViewTaskHeader.module.css";
import ButtonAddTask from "./ButtonAddTask";
import { useContext } from "react";
import TaskContext from "../../store/task-list";

const ViewTaskHeader = () => {
  const { requestAddModal } = useContext(TaskContext);
  return (
    <div className={containerStyle.topTitle}>
      <h1>Task List</h1>
      <ButtonAddTask requestAddModal={requestAddModal} />
    </div>
  );
};

export default ViewTaskHeader;

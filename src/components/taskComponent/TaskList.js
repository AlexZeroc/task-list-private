import { useContext } from "react";
import TaskContext from "../../store/task-list";
import styleContainer from "./stylesTaskStore/TaskList.module.css";
import TaskListElement from "./TaskListElement";

const TaskList = () => {
  const { data, changeStatus, requestEditModal, requestDeleteModal } =
    useContext(TaskContext);

  let variable = data.map((ctx) => (
    <TaskListElement
      key={ctx.id}
      ctx={ctx}
      changeStatus={changeStatus}
      requestEditModal={requestEditModal}
      requestDeleteModal={requestDeleteModal}
    />
  ));

  return <div className={styleContainer.container}>{variable}</div>;
};

export default TaskList;

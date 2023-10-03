import styleContainer from "./TaskList.module.css";
import TaskListElement from "./TaskListElement";

import TaskContext from "../../store/task-list";

import { useContext } from "react";

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

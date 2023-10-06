import styleContainer from "./TaskList.module.css";
import TaskListElement from "./TaskListElement";

import TaskContext from "../../store/task-list";

import { useContext } from "react";

const TaskList = () => {
	const { data, setStatus, showEditView, showDeleteView } =
    useContext(TaskContext);

	let variable = data.map((task) => 
		<TaskListElement
			key={task.id}
			task={task}
			setStatus={setStatus}
			showEditView={showEditView}
			showDeleteView={showDeleteView}
		/>
	);

	return <div className={styleContainer.container}>{variable}</div>;
};

export default TaskList;

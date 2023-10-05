import styles from "./ViewTaskHeader.module.css";
import AddTaskButton from "./AddTaskButton";

import TaskContext from "../../store/task-list";

import { useContext } from "react";

const ViewTaskHeader = () => {
	const { requestAddModal } = useContext(TaskContext);
	return (
		<div className={styles.topTitle}>
			<h1>Task List</h1>
			<AddTaskButton requestAddModal={requestAddModal} />
		</div>
	);
};

export default ViewTaskHeader;

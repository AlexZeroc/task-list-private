import styles from "./TaskList.module.css";
import Task from "./Task";

import EditModal from "../modal/editModal/EditModal";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import useFetch from "../../hooks/useFetch";

import { useState } from "react";

const TaskList = () => {



	const {data, fetchReducer} = useFetch();

	const [editView, onSetEditView] = useState({
		statusEditView: false,
	});

	const [deleteView, onSetDeleteView] = useState({statusDeleteView: false});

	const showEditView = (id) => {
		const taskElement =  data.find((obj) => obj.id === id);

		if(!taskElement) {
			return;
		}

		onSetEditView({
			statusEditView: true,
			...taskElement,
		});
		
	};

	const showDeleteView = (id) => {
		const taskElement =  data.find((obj) => obj.id === id);
		if(!taskElement) {
			return;
		}
		onSetDeleteView({
			statusDeleteView: true,
			idElement: taskElement.id,
		});
		
	};

	let taskListContainer = data.map((task) => 
		<Task
			key={task.id}
			task={task}
			onFetchReducer={fetchReducer}
			showEditView={showEditView}
			showDeleteView={showDeleteView}
		/>
	);

	return <>
		<div className={styles.container}>{taskListContainer}</div>
		{editView.statusEditView && <EditModal editView={editView} onSetEditView={onSetEditView} />}
		{deleteView.statusDeleteView && <DeleteModal  deleteView={deleteView} onSetDeleteView={onSetDeleteView} />}
	</>;
};

export default TaskList;

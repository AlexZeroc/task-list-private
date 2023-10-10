import styleContainer from "./TaskList.module.css";
import TaskListElement from "./TaskListElement";

import EditModal from "../modal/editModal/EditModal";
import DeleteModal from "../modal/deleteModal/DeleteModal";
import TaskContext from "../../store/task-list";

import { useContext, useEffect, useState } from "react";

const TaskList = () => {
	const { getDataTask, setTaskStatus } =
    useContext(TaskContext);

	const [data, getData] = useState([]);


	useEffect(()=> {
		const fetchTasks = async () => {
			const response = await getDataTask();
			if(!response) {
				throw new Error('Something went wrong!');
			}
			getData(response);
		};

		fetchTasks();
	}, [getDataTask]);
    
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

	let variable = data.map((task) => 
		<TaskListElement
			key={task.id}
			task={task}
			setTaskStatus={setTaskStatus}
			showEditView={showEditView}
			showDeleteView={showDeleteView}
		/>
	);

	return <>
		<div className={styleContainer.container}>{variable}</div>
		{editView.statusEditView && <EditModal editView={editView} onSetEditView={onSetEditView} />}
		{deleteView.statusDeleteView && <DeleteModal  deleteView={deleteView} onSetDeleteView={onSetDeleteView} />}
	</>;
};

export default TaskList;

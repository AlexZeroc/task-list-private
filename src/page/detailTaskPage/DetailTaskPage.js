import styleContainer from "./DetailTaskPage.module.css";
import DetailTaskElement from "./DetailTaskElement";

import EditModal from "../../components/modal/editModal/EditModal";
import DeleteModal from "../../components/modal/deleteModal/DeleteModal";
import TaskContext from "../../store/task-list";
import Wrapper from "../../components/UI/wrapper/Wrapper";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailTaskPage = () => {
	const { getDataTask, setTaskStatus } =
    useContext(TaskContext);

	const [data, getData] = useState([]);
	let {taskId} = useParams();

	let paramsId = parseFloat(taskId.substring(1));
	
	useEffect(()=> {
		const fetchTasks = async () => {
			const response = await getDataTask();
			if(!response) {
				throw new Error('Something went wrong!');
			}
			return response;
		};

		fetchTasks()
			.then((dataTask) => dataTask.find(dataTask => dataTask.id === paramsId))
			.then(dataTask => getData([dataTask]));
	}, [getDataTask, paramsId]);

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
		<DetailTaskElement
			key={task.id}
			task={task}
			setTaskStatus={setTaskStatus}
			showEditView={showEditView}
			showDeleteView={showDeleteView}
		/>
	);

	return (
		<Wrapper>
			<div className={styleContainer.container}>{variable}</div>
			{editView.statusEditView && <EditModal editView={editView} onSetEditView={onSetEditView} />}
			{deleteView.statusDeleteView && <DeleteModal  deleteView={deleteView} onSetDeleteView={onSetDeleteView} />}
		</Wrapper>
	);
};

export default DetailTaskPage;

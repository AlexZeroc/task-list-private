import TaskContext from '../store/task-list';

import { useContext, useEffect, useState } from 'react';

const useFetch = (id) => {
	const { dataTask, addTask, editedTask, deleteTask, setTaskStatus, dataDetailTask } = useContext(TaskContext);

	const [data, setData] = useState(() => dataTask());
	const [dataDetail, setDataDetail] = useState(() => dataDetailTask());
	useEffect(() => {
		const resolve = dataTask();
		setData(resolve);
	}, [setData, dataTask]
	);

	useEffect(() => {
		const resolve = dataDetailTask(id);
		setDataDetail(resolve);
	}, [id, dataDetailTask]);

	const fetchReducer = ({ task, method }) => {
		switch (method) {
			case 'ADD': addTask({
				name: task.taskText,
				priority: task.priority,
				status: 1,
				id: data.length + 2
			});
		    break;

			case 'EDIT': editedTask({
				id: task.id,
				name: task.name,
				priority: task.priority
			});
				break;

			case 'DELETE': deleteTask(task);
				break;

			case 'SETSTATUS': setTaskStatus(task);
				break;

			default: {
				throw new Error();
			}
		}
	};
	return {
		dataDetail,
		data,
		fetchReducer
	};
};

export default useFetch;

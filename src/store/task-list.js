import DEFAULT_TASKS from "./ConstantsVariable";
import addStructure from "./addStructureFunc";

import React, { useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
	const [ taskData, setTaskData ] = useState(addStructure(DEFAULT_TASKS));
	const [ editView, setEditView ] = useState({
		statusEditView: false,
	});
	const [ addView, setAddView ] = useState({
		statusAddView: false,
	});
	const [ deleteView, setDeleteView ] = useState({statusDeleteView:false});

	const addTask = (task) => {
		setTaskData(prevState => addStructure([ task, ...prevState ]));
	};
	const editedTask = (task) => {
		const editTaskData = taskData.map((elementTask) => {
			if(elementTask.id === task.id) {
                
				return{ 
					...elementTask,
					name: task.name, 
					priority: task.priority,
				};

			} else{

				return {...elementTask};
                
			}
		  }
		);
        		
		setTaskData(addStructure(editTaskData));
	};

	const deleteTask = (task) => {
		const filterTaskData = taskData.filter((obj) => obj.id !== task);
		
		setTaskData(addStructure(filterTaskData));
	};

	const setStatus = (id) => {
		taskData.forEach((obj) => {
			if (obj.id === id) {
				if (obj.status <= 2) {
					return obj.status += 1;
				} else {
					return obj.status = 1;
				}
			}
		});
		setTaskData(addStructure(taskData));
	};

	const showEditView = (id) => {
		const taskElement = taskData.find((obj) => obj.id === id);

		if(!taskElement) {
			return;
		}

		setEditView({
			statusEditView: true,
			...taskElement,
		});
		
	};

	const showAddView = () => {
		setAddView((prevState) => ({ ...prevState, statusAddView: true }));
	};

	const showDeleteView = (id) => {
		const taskElement = taskData.find((obj) => obj.id === id);
		if(!taskElement) {
			return;
		}
		setDeleteView({
			statusDeleteView: true,
			idElement: taskElement.id,
		});
		
	};

	return (
		<TaskContext.Provider
			value={{
				data: taskData,
				setStatus: setStatus,
				editView: editView,
				addView: addView,
				showEditView: showEditView,
				setEditView: setEditView,
				editedTask: editedTask,
				showAddView: showAddView,
				setAddView : setAddView,
				addTask: addTask,
				deleteView: deleteView,
				showDeleteView : showDeleteView,
				setDeleteView: setDeleteView,
				deleteTask: deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

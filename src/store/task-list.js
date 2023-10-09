import DEFAULT_TASKS from "./ConstantsVariable";
import setTaskDataStructure from "./setTaskDataStructure";

import React, { useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
	const [taskData, setTaskData] = useState(setTaskDataStructure(DEFAULT_TASKS));

	const addTask = (task) => {
		setTaskData(prevState => setTaskDataStructure([task, ...prevState]));
	};
    
	const editedTask = (task) => {
		const setIsTaskData = taskData.map((elementTask) => {
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
        		
		setTaskData(setTaskDataStructure(setIsTaskData));
	};

	const deleteTask = (task) => {
		const setIsTaskData = taskData.filter((obj) => obj.id !== task);
		
		setTaskData(setTaskDataStructure(setIsTaskData));
	};


	const setTaskNotes = (notes) => {
		const setIsTaskData = taskData.map((elementTask) => {
			let textNotes = notes.notes;
			if(elementTask.id === notes.id) {
                    
				return{ 
					...elementTask,
					notes: textNotes
				};
    
			} else{
    
				return {...elementTask};
                    
			}
		}
		);
		setTaskData(setTaskDataStructure(setIsTaskData));

	};



	const setTaskStatus = (id) => {
		const setIsStatusTask = taskData.map((obj) => {
			if (obj.id === id) {
				if (obj.status <= 2) {
					return { ...obj, status: obj.status + 1};
				} else {
					return { ...obj, status: 1};
				}
			}  else {
				return obj; 
			}
		});
		setTaskData(setTaskDataStructure(setIsStatusTask));
	};



	return (
		<TaskContext.Provider
			value={{
				data: taskData,
				setTaskStatus: setTaskStatus,
				editedTask: editedTask,
				addTask: addTask,
				deleteTask: deleteTask,
				setTaskNotes: setTaskNotes,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

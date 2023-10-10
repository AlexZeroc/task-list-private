import DEFAULT_TASKS from "./ConstantsVariable";
import reducer from "./reducer";
import setTaskDataStructure from "./setTaskDataStructure";

import React, { useReducer } from "react";


const initialState =  setTaskDataStructure(DEFAULT_TASKS);



const TaskContext = React.createContext();
export const TaskContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addTask = (task) => {
		dispatch({type: 'add', task: task });
	};
    
	const editedTask = (task) => {
		dispatch({type: 'edit', task: task });
	};

	const deleteTask = (task) => {
		dispatch({type: 'delete', task: task });
	};

	const setTaskStatus = (task) => {
		dispatch({type: 'setStatus', task: task });
	};



	return (
		<TaskContext.Provider
			value={{
				data: state,
				setTaskStatus: setTaskStatus,
				editedTask: editedTask,
				addTask: addTask,
				deleteTask: deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;


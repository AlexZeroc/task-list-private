import DEFAULT_TASKS from './ConstantsVariable';
import reducer from './reducer';
import setTaskDataStructure from './setTaskDataStructure';

import React, { useReducer } from 'react';

const initialState = setTaskDataStructure(DEFAULT_TASKS);

const TaskContext = React.createContext();
export const TaskContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addTask = (task) => {
		dispatch({ type: 'add', task });
	};

	const editedTask = (task) => {
		dispatch({ type: 'edit', task });
	};

	const deleteTask = (task) => {
		dispatch({ type: 'delete', task });
	};

	const setTaskStatus = (task) => {
		dispatch({ type: 'setStatus', task });
	};

	const dataTask = () => {
		return state;
	};

	const dataDetailTask = (id) => {
		const isTask = state.find((task) => task.id === id);

		return [{ ...isTask }];
	};

	return (
		<TaskContext.Provider
			value={{
			  dataDetailTask,
			  dataTask,
			  setTaskStatus,
			  editedTask,
			  addTask,
			  deleteTask
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

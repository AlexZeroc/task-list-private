import DEFAULT_TASKS from "./ConstantsVariable";
import setTaskDataStructure from "./setTaskDataStructure";

import React, { useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = ( { children } ) => {
	const [ taskData, setTaskData ] = useState( setTaskDataStructure( DEFAULT_TASKS ) );
	const [ editView, setEditView ] = useState( {
		statusEditView: false,
	} );
	const [ addView, setAddView ] = useState( {
		statusAddView: false,
	} );
	const [ deleteView, setDeleteView ] = useState( {statusDeleteView: false} );
	const addTask = ( task ) => {
		setTaskData( prevState => setTaskDataStructure( [ task, ...prevState ] ) );
	};
	const editedTask = ( task ) => {
		const editTaskData = taskData.map( ( elementTask ) => {
			if( elementTask.id === task.id ) {
                
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
        		
		setTaskData( setTaskDataStructure( editTaskData ) );
	};

	const deleteTask = ( task ) => {
		const filterTaskData = taskData.filter( ( obj ) => obj.id !== task );
		
		setTaskData( setTaskDataStructure( filterTaskData ) );
	};

	const setTaskStatus = ( id ) => {
		const changedStatusTaskElement = taskData.map( ( obj ) => {
			if ( obj.id === id ) {
				if ( obj.status <= 2 ) {
					return { ...obj, status: obj.status + 1};
				} else {
					return { ...obj, status: 1};
				}
			}  else {
				return obj; 
			}
		} );
		setTaskData( setTaskDataStructure( changedStatusTaskElement ) );
	};

	const showEditView = ( id ) => {
		const taskElement = taskData.find( ( obj ) => obj.id === id );

		if( !taskElement ) {
			return;
		}

		setEditView( {
			statusEditView: true,
			...taskElement,
		} );
		
	};

	const showAddView = () => {
		setAddView( ( prevState ) => ( { ...prevState, statusAddView: true } ) );
	};

	const showDeleteView = ( id ) => {
		const taskElement = taskData.find( ( obj ) => obj.id === id );
		if( !taskElement ) {
			return;
		}
		setDeleteView( {
			statusDeleteView: true,
			idElement: taskElement.id,
		} );
		
	};

	return (
		<TaskContext.Provider
			value={{
				data: taskData,
				setTaskStatus: setTaskStatus,
				editView: editView,
				addView: addView,
				showEditView: showEditView,
				setEditView: setEditView,
				editedTask: editedTask,
				showAddView: showAddView,
				setAddView: setAddView,
				addTask: addTask,
				deleteView: deleteView,
				showDeleteView: showDeleteView,
				setDeleteView: setDeleteView,
				deleteTask: deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

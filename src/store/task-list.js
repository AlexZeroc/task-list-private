import DEFAULT_TASKS from "./ConstantsVariable";
import addStructure from "./addStructureFunc";

import React, { useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = ({ children }) => {
	const [dataTask, mutateDataTask] = useState(addStructure(DEFAULT_TASKS));
	const [modalEditView, checkModalEditView] = useState({
		statusModal: false,
	});
	const [modalAddView, checkModalAddView] = useState({
		statusAddModal: false,
	});
	const [modalDeleteView, checkModalDeleteView] = useState(false);

	const addTask = (task) => {
		DEFAULT_TASKS.unshift(task);
		mutateDataTask(addStructure(DEFAULT_TASKS));
	};
	const editedTask = (task) => {
		DEFAULT_TASKS.map((obj) => {
			if (obj.id === task.id) {
				return (obj.name = task.name), (obj.priority = task.priority);
			} else {
				return obj;
			}
		});
		mutateDataTask(addStructure(DEFAULT_TASKS));
	};

	const deleteTask = (task) => {
		DEFAULT_TASKS.find((obj, index) => {
			if(obj.id === task) return DEFAULT_TASKS.splice(index, 1);
		});

		mutateDataTask(addStructure(DEFAULT_TASKS));
	};

	const changeStatus = (id) => {
		DEFAULT_TASKS.forEach((obj) => {
			if (obj.id === id) {
				if (obj.status <= 2) {
					return (obj.status += 1);
				} else {
					return (obj.status = 1);
				}
			}
		});
		mutateDataTask(addStructure(DEFAULT_TASKS));
	};

	const requestEditModal = (id) => {
		const taskElement = dataTask.find((obj) => obj.id === id);

		if (Object.keys(taskElement).length > 0 || taskElement !== undefined || taskElement !== null ) {
			checkModalEditView({
				statusModal: true,
				...taskElement,
			});
		}
	};

	const requestAddModal = () => {
		checkModalAddView((prevState) => ({ ...prevState, statusAddModal: true }));
	};

	const requestDeleteModal = (id) => {
		const taskElement = dataTask.find((obj) => obj.id === id);
		if (Object.keys(taskElement).length > 0 || taskElement !== undefined || taskElement !== null ) {
			checkModalDeleteView({
				statusModalDelete: true,
				idElement: taskElement.id,
			});
		}
	};

	return (
		<TaskContext.Provider
			value={{
				data: dataTask,
				changeStatus: changeStatus,
				modalEditView: modalEditView,
				modalAddView: modalAddView,
				requestEditModal: requestEditModal,
				checkModalEditView: checkModalEditView,
				editedTask: editedTask,
				requestAddModal: requestAddModal,
				checkModalAddView: checkModalAddView,
				addTask: addTask,
				modalDeleteView: modalDeleteView,
				requestDeleteModal: requestDeleteModal,
				checkModalDeleteView: checkModalDeleteView,
				deleteTask: deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

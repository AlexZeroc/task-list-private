import React, { useState } from "react";
import DEFAULT_TASKS from "./ConstantsVariable";
import addStructure from "./addStructureFunc";

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
    DEFAULT_TASKS.forEach((obj) => {
      if (obj.id === task.id) {
        return (obj.name=task.name, obj.priority = task.priority );
      }
    });
    mutateDataTask(addStructure(DEFAULT_TASKS));
  };

  const deleteTask = (task) => {
    const indesTask = DEFAULT_TASKS.findIndex((obj) => obj.id === task);
    delete DEFAULT_TASKS[indesTask];
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
    const [taskElement] = dataTask.filter((obj) => obj.id === id);
    checkModalEditView({
      statusModal: true,
      ...taskElement,
    });
  };

  const requestAddModal = () => {
    checkModalAddView((prevState) => ({ ...prevState, statusAddModal: true }));
  };

  const requestDeleteModal = (id) => {
    const [taskElement] = dataTask.filter((obj) => obj.id === id);
    checkModalDeleteView({
      statusModalDelete: true,
      idElement: taskElement.id,
    });
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

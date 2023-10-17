import DEFAULT_TASKS from "./ConstantsVariable";
import reducer from "./reducer";
import setTaskDataStructure from "./setTaskDataStructure";

import React, { useReducer } from "react";

const initialState = setTaskDataStructure(DEFAULT_TASKS);

const TaskContext = React.createContext();
export const TaskContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "add", task });
  };

  const editedTask = (task) => {
    dispatch({ type: "edit", task });
  };

  const deleteTask = (task) => {
    dispatch({ type: "delete", task });
  };

  const setTaskStatus = (task) => {
    dispatch({ type: "setStatus", task });
  };

  const setDataTask = (id) => {
    const isTask = state.find((task) => task.id === id);
    const setTask = [{ ...isTask }];
    return setTask;
  };

  return (
    <TaskContext.Provider
      value={{
        setDataTask,
        stateUserTasks: state,
        setTaskStatus,
        editedTask,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;

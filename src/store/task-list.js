import DEFAULT_TASKS from "./ConstantsVariable";
import reducer from "./reducer";
import setTaskDataStructure from "./setTaskDataStructure";

import React, { useReducer } from "react";

const initialState = setTaskDataStructure(DEFAULT_TASKS);

const MockTasksContext = React.createContext();
export const MockTasksProvider = ({ children }) => {
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
    <MockTasksContext.Provider
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
    </MockTasksContext.Provider>
  );
};

export default MockTasksContext;

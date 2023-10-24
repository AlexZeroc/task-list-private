import DEFAULT_TASKS from './ConstantsVariable';
import reducer from './reducer';
import setTaskDataStructure from './setTaskDataStructure';

import React, { useReducer, useMemo, useCallback } from 'react';

const initialState = setTaskDataStructure(DEFAULT_TASKS);

const MockTasksContext = React.createContext();
export const MockTasksProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    dispatch({ type: 'add', task });
  };

  const updateTask = (task) => {
    dispatch({ type: 'edit', task });
  };

  const deleteTask = (task) => {
    dispatch({ type: 'delete', task });
  };

  const updateTaskStatus = (task) => {
    dispatch({ type: 'setStatus', task });
  };

  const getAllTasks = useMemo(() => {
    return state;
  }, [state]);

  const getTaskById = useCallback(
    (id) => {
      const elementArrayTasksFoundById = state.find((task) => task.id === id);

      return elementArrayTasksFoundById;
    },
    [state]
  );

  return (
    <MockTasksContext.Provider
      value={{
        getTaskById,
        getAllTasks,
        updateTaskStatus,
        updateTask,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </MockTasksContext.Provider>
  );
};

export default MockTasksContext;

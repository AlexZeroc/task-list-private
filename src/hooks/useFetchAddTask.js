import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useCallback, useContext, useState } from 'react';

export const useFetchAddTask = () => {
  const { addTask } = useContext(MockTasksContext);
  const [error, setError] = useState(null);
  const fetchAddTask = useCallback(
    () => wait(500).then(() => addTask),
    [useFetchAddTask]
  );
  const callPromiseResponse = async (task) => {
    try {
      const response = await fetchAddTask();
      response(task);
    } catch {
      setError(true);
    }
  };
  return [callPromiseResponse, error];
};

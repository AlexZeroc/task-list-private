import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useCallback, useContext, useState } from 'react';

export const useFetchDelete = () => {
  const { deleteTask } = useContext(MockTasksContext);
  const [error, setError] = useState(null);

  const fetchDeleteTask = useCallback(
    () => wait(500).then(() => deleteTask),
    [useFetchDelete]
  );

  const callPromiseResponse = async (id) => {
    try {
      const response = await fetchDeleteTask();
      response(id);
    } catch {
      setError(true);
    }
  };

  return [callPromiseResponse, error];
};

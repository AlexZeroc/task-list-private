import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useCallback, useContext, useState } from 'react';

export const useFetchPostTaskList = () => {
  const { updateTask } = useContext(MockTasksContext);
  const [error, setError] = useState(null);

  const fetchUpdateTask = useCallback(
    () => wait(500).then(() => updateTask),
    [useFetchPostTaskList]
  );

  const callPromiseResponse = async (body) => {
    try {
      const response = await fetchUpdateTask();
      response(body);
    } catch {
      setError(true);
    }
  };

  return [callPromiseResponse, error];
};

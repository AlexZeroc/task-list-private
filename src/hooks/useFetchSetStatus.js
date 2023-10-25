import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useCallback, useContext, useState } from 'react';

export const useFetchSetStatus = () => {
  const { updateTaskStatus } = useContext(MockTasksContext);
  const [errorStatus, setErrorStatus] = useState(null);

  const fetchUpdateTaskStatus = useCallback(
    () => wait(500).then(() => updateTaskStatus),
    [useFetchSetStatus]
  );

  const callPromiseResponse = async (id) => {
    try {
      const response = await fetchUpdateTaskStatus();
      response(id);
    } catch {
      setErrorStatus(true);
    }
  };

  return [callPromiseResponse, errorStatus];
};

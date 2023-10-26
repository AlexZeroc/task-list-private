import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useCallback, useContext, useEffect, useState, useMemo } from 'react';

export const useFetchTaskList = () => {
  const { getAllTasks } = useContext(MockTasksContext);
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getTasks = useMemo(() => getAllTasks, [getAllTasks]);
  const fetchTaskList = useCallback(
    () => wait(500).then(() => getTasks),
    [getAllTasks]
  );
  useEffect(() => {
    const callPromiseResponse = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTaskList();
        setTasks(response);

        setIsLoaded(true);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    callPromiseResponse();
  }, [getAllTasks]);
  return [tasks, isLoading, isLoaded, error];
};

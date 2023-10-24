import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useContext, useState, useEffect } from 'react';

export const useFetchTaskById = (id) => {
  const { getTaskById } = useContext(MockTasksContext);
  const [taskById, setTaskById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchTaskList = () => wait(500).then(() => getTaskById(id));

  useEffect(() => {
    const loadAllTasks = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTaskList();
        setTaskById(response);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadAllTasks();
  }, [getTaskById]);
  return [taskById, isLoading, isLoaded, error];
};

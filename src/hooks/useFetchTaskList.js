import MockTasksContext from '../store/task-list';
import { wait } from '../utility/wait';

import { useContext, useEffect, useState } from 'react';

export const useFetchTaskList = () => {
  const { getAllTasks } = useContext(MockTasksContext);
  const [tasks, setTasks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const fetchTaskList = () => wait(500).then(() => getAllTasks());
  console.log(fetchTaskList());
  useEffect(() => {
    const loadAllTasks = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTaskList();
        setTasks(response);
        setIsLoaded(true);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    loadAllTasks();
  }, [getAllTasks]);
  return [tasks, isLoading, isLoaded, error];
};

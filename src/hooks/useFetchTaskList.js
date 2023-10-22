import MockTasksContext from "../store/task-list";
import { wait } from "../utility/wait";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { getAllTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const fetchTaskList = () => wait(500).then(() => getAllTasks());

  useEffect(() => {
    const loadAllTasks = async () => {
      setIsLoading(true);
      try {
        const tasks = await fetchTaskList();
        setData(tasks);
        setIsLoaded(true);
      } catch (err) {
        setIsLoaded(false);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadAllTasks();
  }, [getAllTasks]);
  return [data, isLoading, isLoaded, error];
};

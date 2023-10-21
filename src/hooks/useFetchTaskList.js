import MockTasksContext from "../store/task-list";
import { wait } from "../utility/wait";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { getAllTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fetchTaskList = () => wait(500).then(() => getAllTasks());

  useEffect(() => {
    const loadAllTasks = async () => {
      setIsLoading(true);
      try {
        const tasks = await fetchTaskList();
        setData(tasks);
        setIsLoading(false);
        setIsLoaded(true);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    loadAllTasks();
  }, [getAllTasks]);
  return [data, isLoading, isLoaded, error];
};

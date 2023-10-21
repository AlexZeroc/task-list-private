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
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchTaskList();
        setData(response);
        setIsLoading(false);
        setIsLoaded(true);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [getAllTasks]);
  return [data, isLoading, isLoaded, error];
};

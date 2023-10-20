import MockTasksContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { currentUserTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(currentUserTasks);
      }, ms);
    });
  };
  useEffect(() => {
    const requestTasks = async () => {
      setIsLoading(true);
      try {
        const response = await delay(500);
        setIsLoading(false);
        setIsLoaded(true);
        setData(response);
      } catch {
        setError(true);
      }
    };
    requestTasks();
    return () => {};
  }, [currentUserTasks]);

  return [data, isLoading, isLoaded, error];
};

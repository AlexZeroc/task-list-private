import MockTasksContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { currentUserTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const delayRequest = (ms) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(currentUserTasks);
        reject("error");
      }, ms);
    });
  };
  useEffect(() => {
    const requestTasks = async () => {
      setIsLoading(true);

      await delayRequest(500)
        .then((response) => {
          setIsLoading(false);
          setIsLoaded(true);
          return setData(response);
        })
        .catch((error) => setError(error));
    };
    requestTasks();
    return () => {};
  }, [currentUserTasks]);

  return [data, isLoading, isLoaded, error];
};

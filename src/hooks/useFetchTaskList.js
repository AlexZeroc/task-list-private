import MockTasksContext from "../store/task-list";
import { fetchTaskList } from "../utility/fetchTaskList";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { currentUserTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const requestTasks = async () => {
      setIsLoading(true);
      fetchTaskList(500)
        .then(() => {
          setData(currentUserTasks);
          setIsLoading(false);
          setIsLoaded(true);
        })
        .catch((err) => setError(err));
    };
    requestTasks();
    return () => {};
  }, [currentUserTasks]);

  return [data, isLoading, isLoaded, error];
};

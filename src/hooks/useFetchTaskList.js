import MockTasksContext from "../store/task-list";
import { wait } from "../utility/wait";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { getAllTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const fetchTaskList = async () => wait(500).then(() => getAllTasks());

  useEffect(() => {
    setIsLoading(true);
    fetchTaskList()
      .then((tasks) => {
        console.log(tasks);
        setData(tasks);
        setIsLoading(false);
        setIsLoaded(true);
      })
      .catch((err) => setError(err));

    return () => {};
  }, [getAllTasks]);
  return [data, isLoading, isLoaded, error];
};

import MockTasksContext from "../store/task-list";

import { useContext, useState } from "react";

export const useFetchTaskList = () => {
  const { currentUserTasks } = useContext(MockTasksContext);
  const [data, setData] = useState(null);
  const [isLoading, checkLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async () =>
    new Promise((response) => {
      response(currentUserTasks);
    })
      .then((response) => {
        checkLoading(false);
        setData(response);
      })
      .catch((err) => {
        setError(err);
      });

  setTimeout(fetchTasks, 500);

  return [data, isLoading, error];
};

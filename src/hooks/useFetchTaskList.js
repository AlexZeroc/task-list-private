import MockTasksContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { currentUserTasks } = useContext(MockTasksContext);
  const [data, handleSetData] = useState(null);
  const [isLoadingStatus, handleSetIsLoadingStatus] = useState({
    status: "expectation",
  });
  const [error, hanldeSetError] = useState();
  const fetchTasks = async () =>
    new Promise((resolve, reject) => {
      handleSetIsLoadingStatus({
        status: "loading",
      });
      setTimeout(() => {
        resolve(currentUserTasks);
        reject("error");
      }, 500);
    })
      .then((response) => {
        handleSetIsLoadingStatus({
          status: "ok",
        });
        handleSetData(response);
        return;
      })
      .catch((error) => hanldeSetError(error));
  useEffect(() => {
    fetchTasks();
    return () => {};
  }, [currentUserTasks]);

  return [data, isLoadingStatus, error];
};

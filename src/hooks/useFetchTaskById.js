import MockTasksContext from "../store/task-list";

import { useContext, useState, useEffect } from "react";

export const useFetchTaskById = (id) => {
  const { currentUserTasksById } = useContext(MockTasksContext);
  const [dataById, setDataById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestTaskById = async () => {
      setIsLoading(true);

      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(currentUserTasksById(id));
          reject("error");
        }, 500);
      })
        .then((response) => {
          setIsLoading(false);
          setIsLoaded(true);
          return setDataById(response);
        })
        .catch((error) => setError(error));
    };
    requestTaskById();
    return () => {};
  }, [currentUserTasksById]);

  return [dataById, isLoading, isLoaded, error];
};

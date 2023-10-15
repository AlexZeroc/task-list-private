import TaskContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { dataTask } = useContext(TaskContext);
  const [data, setData] = useState(dataTask);
  useEffect(() => {
    const resolve = dataTask;
    setData(resolve);
  }, [setData, dataTask]);

  return data;
};

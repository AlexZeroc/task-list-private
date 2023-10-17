import TaskContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchTaskList = () => {
  const { arrayUserTask } = useContext(TaskContext);
  const [data, setData] = useState(arrayUserTask);
  useEffect(() => {
    const resolve = arrayUserTask;
    setData(resolve);
  }, [setData, arrayUserTask]);

  return data;
};

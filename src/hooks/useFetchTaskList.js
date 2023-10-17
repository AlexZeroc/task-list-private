import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchTaskList = () => {
  const { arrayUserTask } = useContext(TaskContext);

  return arrayUserTask;
};

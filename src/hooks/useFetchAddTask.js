import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchAddTask = () => {
  const { addTask } = useContext(TaskContext);
  return addTask;
};

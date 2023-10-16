import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchDelete = () => {
  const { deleteTask } = useContext(TaskContext);
  return deleteTask;
};

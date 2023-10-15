import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchPostTaskList = () => {
  const { editedTask } = useContext(TaskContext);

  return editedTask;
};

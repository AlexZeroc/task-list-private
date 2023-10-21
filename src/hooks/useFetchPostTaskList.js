import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchPostTaskList = () => {
  const { updateTask } = useContext(MockTasksContext);

  return updateTask;
};

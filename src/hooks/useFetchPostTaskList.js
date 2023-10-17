import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchPostTaskList = () => {
  const { editedTask } = useContext(MockTasksContext);

  return editedTask;
};

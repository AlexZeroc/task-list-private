import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchDelete = () => {
  const { deleteTask } = useContext(MockTasksContext);
  return deleteTask;
};

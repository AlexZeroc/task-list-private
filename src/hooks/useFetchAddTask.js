import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchAddTask = () => {
  const { addTask } = useContext(MockTasksContext);
  return addTask;
};

import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchSetStatus = () => {
  const { updateTaskStatus } = useContext(MockTasksContext);
  console.log(updateTaskStatus);
  return updateTaskStatus;
};

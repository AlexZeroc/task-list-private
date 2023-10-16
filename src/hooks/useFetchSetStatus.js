import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchSetStatus = () => {
  const { setTaskStatus } = useContext(TaskContext);

  return setTaskStatus;
};

import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchSetStatus = () => {
  const { setTaskStatus } = useContext(MockTasksContext);

  return setTaskStatus;
};

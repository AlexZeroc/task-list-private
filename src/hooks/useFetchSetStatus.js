import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchSetStatus = () => {
  const { updateTaskStatus } = useContext(MockTasksContext);
  const fetchUpdateTaskStatus = async (id) => {
    await updateTaskStatus(id);
  };
  return fetchUpdateTaskStatus;
};

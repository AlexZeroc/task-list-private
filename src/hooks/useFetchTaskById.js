import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchTaskById = (id) => {
  const { currentUserTasksById } = useContext(MockTasksContext);

  return currentUserTasksById(id);
};

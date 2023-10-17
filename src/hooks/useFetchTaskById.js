import MockTasksContext from "../store/task-list";

import { useContext } from "react";

export const useFetchTaskById = (id) => {
  const { setDataTask } = useContext(MockTasksContext);

  return setDataTask(id);
};

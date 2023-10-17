import TaskContext from "../store/task-list";

import { useContext } from "react";

export const useFetchSpecificTask = (id) => {
  const { setDataTask } = useContext(TaskContext);

  return setDataTask(id);
};

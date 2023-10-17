import MockTasksContext from "../store/task-list";

import { useContext, useState } from "react";

export const useFetchTaskList = () => {
  const { stateUserTasks } = useContext(MockTasksContext);
  const [tasks, setTasks] = useState([]);
  const responce = async () => {
    try {
      const arrayTasks = await stateUserTasks;
      setTasks(arrayTasks);
    } catch (err) {
      throw new Error(err);
    }
  };

  setTimeout(responce, 500);
  return tasks;
};

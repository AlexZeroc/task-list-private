import TaskContext from "../store/task-list";

import { useContext, useState } from "react";

export const useFetchTaskList = () => {
  const { arrayUserTask } = useContext(TaskContext);
  const [tasks, setTasks] = useState([]);
  const responce = async () => {
    try {
      const arrayTasks = await arrayUserTask;
      setTasks(arrayTasks);
    } catch (err) {
      throw new Error(err);
    }
  };

  setTimeout(responce, 500);
  return tasks;
};

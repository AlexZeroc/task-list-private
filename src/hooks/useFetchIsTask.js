import TaskContext from "../store/task-list";

import { useContext, useEffect, useState } from "react";

export const useFetchIsTask = (id) => {
  const { setDataTask } = useContext(TaskContext);
  const [dataDetail, setDataDetail] = useState(setDataTask);
  useEffect(() => {
    const resolve = setDataTask(id);
    setDataDetail(resolve);
  }, [id, setDataTask]);
  return dataDetail;
};

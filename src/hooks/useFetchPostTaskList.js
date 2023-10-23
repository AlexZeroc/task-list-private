import MockTasksContext from '../store/task-list'

import { useContext } from 'react'

export const useFetchPostTaskList = () => {
  const { updateTask } = useContext(MockTasksContext)
  const fetchUpdateTask = async (body) => {
    await updateTask(body)
  }
  return fetchUpdateTask
}

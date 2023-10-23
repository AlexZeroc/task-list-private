import MockTasksContext from '../store/task-list'

import { useContext } from 'react'

export const useFetchDelete = () => {
  const { deleteTask } = useContext(MockTasksContext)
  const fetchDeleteTask = async (id) => {
    await deleteTask(id)
  }
  return fetchDeleteTask
}

import MockTasksContext from '../store/task-list'
import { wait } from '../utility/wait'

import { useContext, useState, useEffect } from 'react'

export const useFetchTaskById = (id) => {
  const { currentUserTasksById } = useContext(MockTasksContext)
  const [dataById, setDataById] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  const fetchTaskList = () => wait(500).then(() => currentUserTasksById(id))

  useEffect(() => {
    const loadAllTasks = async () => {
      setIsLoading(true)
      try {
        const task = await fetchTaskList()
        setDataById(task)
        setIsLoaded(true)
      } catch (err) {
        setIsLoaded(false)
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    loadAllTasks()
  }, [currentUserTasksById])
  return [dataById, isLoading, isLoaded, error]
}

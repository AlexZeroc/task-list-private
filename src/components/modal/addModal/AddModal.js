import ModalWrapper from '../../UI/wrapper/ModalWrapper'
import FormModal from '../../UI/formModal/FormModal'
import { useFetchAddTask } from '../../../hooks/useFetchAddTask'
import { useFetchTaskList } from '../../../hooks/useFetchTaskList'

import { useState } from 'react'

const AddModal = ({ onSetAddView }) => {
  const [taskText, handleSetTaskText] = useState('')
  const [priority, hanldeAddPriority] = useState({ priority: 1 })
  const data = useFetchTaskList()
  const handleAddTask = useFetchAddTask()
  const handleSetTask = (event) => {
    handleSetTaskText(event.target.value)
  }
  const defaultText = 'Add task text'

  const handlePostAddFormTask = (event) => {
    event.preventDefault()
    handleAddTask({
      name: taskText,
      priority: priority.priority,
      status: 1,
      id: data.length + new Date().getTime(),
    })

    onSetAddView((prevState) => ({
      ...prevState,
      statusAddView: false,
    }))
  }

  const handleCloseAddModal = () => {
    onSetAddView((prevState) => ({ ...prevState, statusAddView: false }))
  }

  const onChangeStatus = (event) => {
    const textStatusLink = event.target.firstChild.data
    switch (textStatusLink) {
      case 'high':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 3,
        }))
        break
      case 'medium':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 2,
        }))
        break
      case 'low':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 1,
        }))
        break
      default:
        break
    }
  }

  return (
    <ModalWrapper>
      <FormModal
        defaultText={defaultText}
        priority={priority.priority}
        taskText={taskText}
        onSetTask={handleSetTask}
        onPostFormTask={handlePostAddFormTask}
        onChangeStatus={onChangeStatus}
        onCloseModal={handleCloseAddModal}
        textButton={'Add'}
      />
    </ModalWrapper>
  )
}

export default AddModal

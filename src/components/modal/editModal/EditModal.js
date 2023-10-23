import WrapperModal from '../../UI/wrapper/ModalWrapper'
import FormModal from '../../UI/formModal/FormModal'
import { useFetchPostTaskList } from '../../../hooks/useFetchPostTaskList'

import { useState } from 'react'

const EditModal = ({ editView, onSetEditView }) => {
  const [taskText, handleSetTaskText] = useState('')
  const hanldeEditTask = useFetchPostTaskList()
  const defaultText = editView.name
  const handleSetTask = (event) => {
    handleSetTaskText(event.target.value)
  }

  const handlePostEditFormTask = (event) => {
    event.preventDefault()
    hanldeEditTask({
      id: editView.id,
      name: taskText,
      priority: editView.priority,
    })
    onSetEditView((prevState) => ({
      ...prevState,
      statusEditView: false,
    }))
  }

  const handleCloseEditModal = () => {
    onSetEditView((prevState) => ({
      ...prevState,
      statusEditView: false,
    }))
  }

  const handleChangeStatus = (event) => {
    const textStatusLink = event.target.firstChild.data
    switch (textStatusLink) {
      case 'high':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 3,
        }))
        break
      case 'medium':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 2,
        }))
        break
      case 'low':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 1,
        }))
        break
      default:
        break
    }
  }

  return (
    <WrapperModal>
      <FormModal
        defaultText={defaultText}
        priority={editView.priority}
        taskText={taskText}
        onSetTask={handleSetTask}
        onPostFormTask={handlePostEditFormTask}
        onChangeStatus={handleChangeStatus}
        onCloseModal={handleCloseEditModal}
        textButton={'Edit'}
      />
    </WrapperModal>
  )
}

export default EditModal

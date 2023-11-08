import ModalWrapper from '../../UI/wrapper/ModalWrapper';
import FormModal from '../../UI/forms/FormModal';
import { useUpdateTasksMutation } from '../../../store/TasksApi';

import { useState } from 'react';

const EditModal = ({ editView, onSetEditView }) => {
  const [taskText, handleSetTaskText] = useState('');
  const [hanldeEditTask] = useUpdateTasksMutation();
  const defaultText = editView.name;
  const handleSetTask = (event) => {
    handleSetTaskText(event.target.value);
  };

  const handlePostEditFormTask = (event) => {
    event.preventDefault();

    hanldeEditTask({
      id: editView.id,
      name: taskText,
      priority: editView.priority,
      status: editView.status,
    });
    onSetEditView((prevState) => ({
      ...prevState,
      statusEditView: false,
    }));
  };

  const handleCloseEditModal = () => {
    onSetEditView((prevState) => ({
      ...prevState,
      statusEditView: false,
    }));
  };

  const handleChangeStatus = (event) => {
    const textStatusLink = event.target.firstChild.data;
    switch (textStatusLink) {
      case 'high':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 3,
        }));
        break;
      case 'medium':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 2,
        }));
        break;
      case 'low':
        onSetEditView((prevState) => ({
          ...prevState,
          priority: 1,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <ModalWrapper>
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
    </ModalWrapper>
  );
};

export default EditModal;

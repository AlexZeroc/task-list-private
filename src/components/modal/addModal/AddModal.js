import ModalWrapper from '../../UI/wrapper/ModalWrapper';
import FormModal from '../../UI/formModal/FormModal';
import ErrorPage from '../../../page/ErrorPage';
import { useFetchAddTask } from '../../../hooks/useFetchAddTask';
import { useFetchTaskList } from '../../../hooks/useFetchTaskList';

import { useState } from 'react';

const AddModal = ({ onSetAddView }) => {
  const [taskText, handleSetTaskText] = useState('');
  const [priority, hanldeAddPriority] = useState({ priority: 1 });
  const [tasks] = useFetchTaskList();
  const [handleAddTask, error] = useFetchAddTask();
  const handleSetTask = (event) => {
    handleSetTaskText(event.target.value);
  };
  const defaultText = 'Add task text';

  const handlePostAddFormTask = (event) => {
    event.preventDefault();

    handleAddTask({
      name: taskText,
      priority: priority.priority,
      status: 1,
      id: tasks.length + new Date().getTime(),
    });
    onSetAddView((prevState) => ({
      ...prevState,
      statusAddView: false,
    }));
  };

  const handleCloseAddModal = () => {
    onSetAddView((prevState) => ({ ...prevState, statusAddView: false }));
  };

  const onChangeStatus = (event) => {
    const textStatusLink = event.target.firstChild.data;
    switch (textStatusLink) {
      case 'high':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 3,
        }));
        break;
      case 'medium':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 2,
        }));
        break;
      case 'low':
        hanldeAddPriority((prevState) => ({
          ...prevState,
          priority: 1,
        }));
        break;
      default:
        break;
    }
  };
  if (error)
    return (
      <ModalWrapper>
        <ErrorPage />
      </ModalWrapper>
    );

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
  );
};

export default AddModal;

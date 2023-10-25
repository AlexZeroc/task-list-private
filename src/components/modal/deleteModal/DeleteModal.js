import styles from './DeleteModal.module.css';

import ModalWrapper from '../../UI/wrapper/ModalWrapper';
import ErrorPage from '../../../page/ErrorPage';
import { useFetchDelete } from '../../../hooks/useFetchDelete';

const DeleteModal = ({ onSetDeleteView, deleteView }) => {
  const [handleDeleteTask, error] = useFetchDelete();
  const handleDeleteTaskElement = () => {
    handleDeleteTask(deleteView.idElement);

    onSetDeleteView((prevState) => ({
      ...prevState,
      statusDeleteView: false,
    }));
  };

  if (error)
    return (
      <ModalWrapper>
        <ErrorPage />
      </ModalWrapper>
    );

  return (
    <ModalWrapper>
      <div className={styles.deleteModal}>
        <p>Are you sure you want to delete this task?</p>
        <div className={styles.deleteModal__actions}>
          <button onClick={handleDeleteTaskElement} className={styles.button}>
            Delete
          </button>
          <button
            className={styles.outlineButton}
            onClick={() =>
              onSetDeleteView((prevState) => ({
                ...prevState,
                statusDeleteView: false,
              }))
            }
          >
            Cancel
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteModal;

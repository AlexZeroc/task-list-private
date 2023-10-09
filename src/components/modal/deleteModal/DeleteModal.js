import styles from "./DeleteModal.module.css";

import ModalWrapper from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";

import { useContext } from "react";
const DeleteModal = ({onSetDeleteView, deleteView}) => {
	const { deleteTask } =
    useContext(TaskContext);

	const handleDeleteTaskElement = () => {
		deleteTask(deleteView.idElement);
		onSetDeleteView((prevState) => ({
			...prevState,
			statusDeleteView: false,
		}));
	};
	return (
		<ModalWrapper>
			<div className={styles.deleteModal}>
				<p>Are you sure you want to delete this task?</p>
				<div className={styles[`deleteModal__actions`]}>
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

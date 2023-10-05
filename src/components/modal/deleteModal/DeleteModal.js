import styles from "./DeleteModal.module.css";

import ModalWrapper from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";

import { useContext } from "react";
const DeleteModal = () => {
	const { checkModalDeleteView, deleteTask, modalDeleteView } =
    useContext(TaskContext);

	const handleDeleteTaskElement = () => {
		deleteTask(modalDeleteView.idElement);
		checkModalDeleteView((prevState) => ({
			...prevState,
			statusModalDelete: false,
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
							checkModalDeleteView((prevState) => ({
								...prevState,
								statusModalDelete: false,
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

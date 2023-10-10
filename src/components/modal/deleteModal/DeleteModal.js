import styles from "./DeleteModal.module.css";

import ModalWrapper from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const DeleteModal = ({onSetDeleteView, deleteView}) => {
	const { deleteTask } =
    useContext(TaskContext);

	const navigate = useNavigate();

	const handleDeleteTaskElement = async () => {
		try {
			await deleteTask(deleteView.idElement);
		} catch(e) {
			throw new Error(e);
		}
		onSetDeleteView((prevState) => ({
			...prevState,
			statusDeleteView: false,
		}));
		navigate("/");
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

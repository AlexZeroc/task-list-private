import containerStyle from "./DeleteModal.module.css";

import WrapperModal from "../../UI/wrapper/WrapperModal";
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
		<WrapperModal>
			<div className={containerStyle.deleteModal}>
				<p>Are you sure you want to delete this task?</p>
				<div className={containerStyle[`deleteModal__actions`]}>
					<button onClick={handleDeleteTaskElement} className={containerStyle.button}>
            Delete
					</button>
					<button
						className={containerStyle.outlineButton}
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
		</WrapperModal>
	);
};

export default DeleteModal;

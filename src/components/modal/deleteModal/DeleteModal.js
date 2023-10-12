import styles from "./DeleteModal.module.css";

import ModalWrapper from "../../UI/wrapper/ModalWrapper";
import useFetch from "../../../hooks/useFetch";

import { useNavigate } from "react-router-dom";
const DeleteModal = ({onSetDeleteView, deleteView}) => {


	const navigate = useNavigate();
	const {fetchReducer} = useFetch();
	const handleDeleteTaskElement = () => {
        
		fetchReducer({task: deleteView.idElement, method: 'DELETE' });

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

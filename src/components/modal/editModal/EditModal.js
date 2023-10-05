import WrapperModal from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";
import FormModal from "../../UI/formModal/FormModal";

import { useContext, useState } from "react";

const EditModal = () => {
	const { modalEditView, checkModalEditView, editedTask } =
    useContext(TaskContext);
	const [taskText, setTaskText] = useState('');
	let defaultText = modalEditView.name;

	const onSetTask = (event) => {
		setTaskText(event.target.value);
	};

	const onPostEditFormTask = (event) => {
		event.preventDefault();
		editedTask({
			id: modalEditView.id,
			name: taskText,
			priority: modalEditView.priority,
		});
		checkModalEditView((prevState) => ({
			...prevState,
			statusModal: false,
		}));
	};

	const closeEditModal = () => {
		checkModalEditView((prevState) => ({
			...prevState,
			statusModal: false,
		}));
	};

	const changeStatusTask = (event) => {
		let textStatusLink = event.target.firstChild.data;
		switch (textStatusLink) {
		case "high":
			checkModalEditView((prevState) => ({
				...prevState,
				priority: 3,
			}));
			break;
		case "medium":
			checkModalEditView((prevState) => ({
				...prevState,
				priority: 2,
			}));
			break;
		case "low":
			checkModalEditView((prevState) => ({
				...prevState,
				priority: 1,
			}));
			break;
		default:
			break;
		}
	};

	return (
		<WrapperModal>
			<FormModal
				defaultText={defaultText}
				priority={modalEditView.priority}
				taskText={taskText}
				onSetTask={onSetTask}
				onPostFormTask={onPostEditFormTask}
				changeStatusTask={changeStatusTask}
				closeModal={closeEditModal}
				textButton={"Edit"}
			/>
		</WrapperModal>
	);
};

export default EditModal;

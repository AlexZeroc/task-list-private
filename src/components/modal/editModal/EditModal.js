import WrapperModal from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";
import FormModal from "../../UI/formModal/FormModal";

import { useContext, useState } from "react";

const EditModal = ({editView, onSetEditView}) => {
	const { editedTask } =
    useContext(TaskContext);
	const [taskText, setTaskText] = useState('');
	let defaultText = editView.name;

	const onSetTask = (event) => {
		setTaskText(event.target.value);
	};

	const onPostEditFormTask = async (event) => {
		event.preventDefault();
		try{
			await editedTask({
				id: editView.id,
				name: taskText,
				priority: editView.priority,
			});
		} catch(e) {
			throw new Error('error edit');
		} 
		onSetEditView((prevState) => ({
			...prevState,
			statusEditView: false,
		}));
	};

	const closeEditModal = () => {
		onSetEditView((prevState) => ({
			...prevState,
			statusEditView: false,
		}));
	};

	const onCheckStatusTask = (event) => {
		let textStatusLink = event.target.firstChild.data;
		switch (textStatusLink) {
		case "high":
			onSetEditView((prevState) => ({
				...prevState,
				priority: 3,
			}));
			break;
		case "medium":
			onSetEditView((prevState) => ({
				...prevState,
				priority: 2,
			}));
			break;
		case "low":
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
		<WrapperModal>
			<FormModal
				defaultText={defaultText}
				priority={editView.priority}
				taskText={taskText}
				onSetTask={onSetTask}
				onPostFormTask={onPostEditFormTask}
				onCheckStatusTask={onCheckStatusTask}
				closeModal={closeEditModal}
				textButton={"Edit"}
			/>
		</WrapperModal>
	);
};

export default EditModal;

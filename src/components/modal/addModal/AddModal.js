import WrapperModal from "../../UI/wrapper/WrapperModal";
import FormModal from "../../UI/formModal/FormModal";
import TaskContext from "../../../store/task-list";

import { useContext, useState } from "react";

const AddModal = () => {
	const { checkModalAddView, addTask } = useContext(TaskContext);
	const [textTask, setTextTask] = useState("");
	const [priority, addPriority] = useState({ priority: 1 });
	const onSetTask = (event) => {
		setTextTask(event.target.value);
	};

	let defaultText = "Add task text";

	const onPostAddFormTask = (event) => {
		event.preventDefault();
		addTask({
			name: textTask,
			priority: priority.priority,
			status: 1,
			id: Math.random(),
		});
		checkModalAddView((prevState) => ({
			...prevState,
			statusAddModal: false,
		}));
	};

	const closeAddModal = () => {
		checkModalAddView((prevState) => ({ ...prevState, statusAddModal: false }));
	};

	const changeStatusTask = (event) => {
		let textStatusLink = event.target.firstChild.data;
		switch (textStatusLink) {
		case "high":
			addPriority((prevState) => ({
				...prevState,
				priority: 3,
			}));
			break;
		case "medium":
			addPriority((prevState) => ({
				...prevState,
				priority: 2,
			}));
			break;
		case "low":
			addPriority((prevState) => ({
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
				defaultText = {defaultText}
				priority={priority.priority}
				textTask={textTask}
				onSetTask={onSetTask}
				onPostFormTask={onPostAddFormTask}
				changeStatusTask={changeStatusTask}
				closeModal={closeAddModal}
				textButton={"Add"}
			/>
		</WrapperModal>
	);
};

export default AddModal;

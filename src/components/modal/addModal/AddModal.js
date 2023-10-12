import ModalWrapper from "../../UI/wrapper/ModalWrapper";
import FormModal from "../../UI/formModal/FormModal";
import useFetch from "../../../hooks/useFetch";

import { useState } from "react";

const AddModal = ({onSetAddView}) => {
	const [taskText, setTaskText] = useState("");
	const [priority, addPriority] = useState({ priority: 1 });
	const {fetchReducer} = useFetch();
	const onSetTask = (event) => {
		setTaskText(event.target.value);
	};

	let defaultText = "Add task text";

	const onPostAddFormTask = (event) => {
		event.preventDefault();

		fetchReducer ({
			task: {
				taskText: taskText,
				priority: priority.priority,
			     },
			method: 'ADD'
                
		}
		);
	
		onSetAddView((prevState) => ({
			...prevState,
			statusAddView: false,
		}));
	};

	const closeAddModal = () => {
		onSetAddView((prevState) => ({ ...prevState, statusAddView: false }));
	};

	const onCheckStatusTask = (event) => {
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
		<ModalWrapper>
			<FormModal
				defaultText = {defaultText}
				priority={priority.priority}
				taskText={taskText}
				onSetTask={onSetTask}
				onPostFormTask={onPostAddFormTask}
				onCheckStatusTask={onCheckStatusTask}
				closeModal={closeAddModal}
				textButton={"Add"}
			/>
		</ModalWrapper>
	);
};

export default AddModal;

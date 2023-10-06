import WrapperModal from "../../UI/wrapper/ModalWrapper";
import TaskContext from "../../../store/task-list";
import FormModal from "../../UI/formModal/FormModal";

import { useContext, useState } from "react";

const EditModal = () => {
	const { editView, setEditView, editedTask } =
    useContext( TaskContext );
	const [ taskText, setTaskText ] = useState( '' );
	let defaultText = editView.name;

	const onSetTask = ( event ) => {
		setTaskText( event.target.value );
	};

	const onPostEditFormTask = ( event ) => {
		event.preventDefault();
		editedTask( {
			id: editView.id,
			name: taskText,
			priority: editView.priority,
		} );
		setEditView( ( prevState ) => ( {
			...prevState,
			statusEditView: false,
		} ) );
	};

	const closeEditModal = () => {
		setEditView( ( prevState ) => ( {
			...prevState,
			statusEditView: false,
		} ) );
	};

	const onCheckStatusTask = ( event ) => {
		let textStatusLink = event.target.firstChild.data;
		switch ( textStatusLink ) {
		case "high":
			setEditView( ( prevState ) => ( {
				...prevState,
				priority: 3,
			} ) );
			break;
		case "medium":
			setEditView( ( prevState ) => ( {
				...prevState,
				priority: 2,
			} ) );
			break;
		case "low":
			setEditView( ( prevState ) => ( {
				...prevState,
				priority: 1,
			} ) );
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

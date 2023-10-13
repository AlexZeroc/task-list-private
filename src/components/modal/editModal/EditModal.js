import WrapperModal from '../../UI/wrapper/ModalWrapper';
import FormModal from '../../UI/formModal/FormModal';
import useFetch from '../../../hooks/useFetch';

import { useState } from 'react';

const EditModal = ({ editView, onSetEditView }) => {
	const { fetchReducer } = useFetch();
	const [taskText, setTaskText] = useState('');
	const defaultText = editView.name;

	const onSetTask = (event) => {
		setTaskText(event.target.value);
	};

	const onPostEditFormTask = (event) => {
		event.preventDefault();
		fetchReducer(
			{

				task: {
					id: editView.id,
					name: taskText,
					priority: editView.priority
				},
				method: 'EDIT'
			}
		);
		onSetEditView((prevState) => ({
			...prevState,
			statusEditView: false
		}));
	};

	const closeEditModal = () => {
		onSetEditView((prevState) => ({
			...prevState,
			statusEditView: false
		}));
	};

	const onCheckStatusTask = (event) => {
		const textStatusLink = event.target.firstChild.data;
		switch (textStatusLink) {
			case 'high':
				onSetEditView((prevState) => ({
					...prevState,
					priority: 3
				}));
				break;
			case 'medium':
				onSetEditView((prevState) => ({
					...prevState,
					priority: 2
				}));
				break;
			case 'low':
				onSetEditView((prevState) => ({
					...prevState,
					priority: 1
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
				textButton={'Edit'}
			/>
		</WrapperModal>
	);
};

export default EditModal;

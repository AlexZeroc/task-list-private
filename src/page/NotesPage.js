import styles from "./NotesPage.module.css";

import ModalWrapper from "../components/UI/wrapper/ModalWrapper";
import TaskContext from "../store/task-list";

import {Form, Button} from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";

const NotesPage = () => {
	let {taskId} = useParams();
	const navigate = useNavigate();

	const {data, setTaskNotes} = useContext(TaskContext);
	let idRoutePage = parseFloat(taskId.substring(1)) ;
	const isTaskNotes = data.find(task => task.id === idRoutePage);

	const [enteredNotes, setEneteredNotes] = useState('');

	const handleEnderedNotes = (event) => {
		setEneteredNotes(event.target.value);
	};
	const handlePostSubmit = (event) => {
		event.preventDefault();

		setTaskNotes({
			notes: enteredNotes,
			id: idRoutePage   
		});
		navigate("/");

	};

	return <ModalWrapper>
		<Form onSubmit={handlePostSubmit}>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label htmlFor="inputNotes">Add or edit the current note.</Form.Label>
				<Form.Control
					as="textarea"
					id="inputNotes"
					rows={3}
					placeholder={isTaskNotes.notes}
					value={enteredNotes}
					className={styles.FormControl}
					onChange={handleEnderedNotes}
				/>
				<div className={styles.buttonContainer}>
					<Button variant="primary" onClick={()=> navigate("/")} size="lg">Back</Button>
					<Button variant="success" type="submit" size="lg" disabled={enteredNotes.trim().length <= 0}>Send</Button>
				</div>
			</Form.Group>
		</Form>
	</ModalWrapper>;
};


export default NotesPage;

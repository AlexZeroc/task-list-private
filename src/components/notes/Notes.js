import styles from "./Notes.module.css";

import Wrapper from "../UI/wrapper/Wrapper";

import {Form, FloatingLabel, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Notes = () => {
	return <Wrapper>

		<FloatingLabel controlId="floatingTextarea2" label="Comments">
			<Form.Control
				as="textarea"
				placeholder="Leave a comment here"
				className={styles.FormControl}
			/>
		</FloatingLabel>
		<Button variant="primary"><Link to="/" style={{color: "white", textDecoration: "none", fontWeight: "bold" }}>Back</Link></Button>
	</Wrapper>;
};


export default Notes;

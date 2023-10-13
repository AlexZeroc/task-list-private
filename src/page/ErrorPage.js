import ModalWrapper from '../components/UI/wrapper/ModalWrapper';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<ModalWrapper>
			<Alert variant="danger">
				<Alert.Heading>Oh snap! You got an error!</Alert.Heading>
				<p>
            Change this and that and try again.
				</p>
				<hr />
				<div className="d-flex justify-content-end">
					<Button onClick={() => navigate('/')} variant="outline-danger">
            Close me
					</Button>
				</div>
			</Alert>
		</ModalWrapper>
	);
};

export default ErrorPage;

import styles from './DetailTaskPage.module.css';
import DetailTask from './DetailTask';

import EditModal from '../../components/modal/editModal/EditModal';
import DeleteModal from '../../components/modal/deleteModal/DeleteModal';
import useFetch from '../../hooks/useFetch';
import Wrapper from '../../components/UI/wrapper/Wrapper';

import { useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailTaskPage = () => {
	const { taskId } = useParams();
	const { dataDetail, fetchReducer } = useFetch(+taskId);

	const [editView, onSetEditView] = useState({
		statusEditView: false
	});

	const [deleteView, onSetDeleteView] = useState({ statusDeleteView: false });

	const showEditView = (id) => {
		const taskElement = dataDetail.find((obj) => obj.id === id);

		if (!taskElement) {
			return;
		}

		onSetEditView({
			statusEditView: true,
			...taskElement
		});
	};

	const showDeleteView = (id) => {
		const taskElement = dataDetail.find((obj) => obj.id === id);
		if (!taskElement) {
			return;
		}
		onSetDeleteView({
			statusDeleteView: true,
			idElement: taskElement.id
		});
	};

	const taskContainer = dataDetail.map((task) =>
		<DetailTask
			key={+taskId}
			task={task}
			onFetchReducer={fetchReducer}
			showEditView={showEditView}
			showDeleteView={showDeleteView}
		/>
	);

	return <Wrapper>
		<div className={styles.container}>{taskContainer}</div>
		{editView.statusEditView && <EditModal editView={editView} onSetEditView={onSetEditView} />}
		{deleteView.statusDeleteView && <DeleteModal deleteView={deleteView} onSetDeleteView={onSetDeleteView} />}
	</Wrapper>;
};

export default DetailTaskPage;

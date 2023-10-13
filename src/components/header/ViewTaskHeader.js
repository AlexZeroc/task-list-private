import styles from './ViewTaskHeader.module.css';
import AddTaskButton from './AddTaskButton';

import AddModal from '../modal/addModal/AddModal';

import { useState } from 'react';

const ViewTaskHeader = () => {
	const [addView, onSetAddView] = useState({
		statusAddView: false
	});

	const showAddView = () => {
		onSetAddView({ statusAddView: true });
	};

	return (
		<>
			<div className={styles.topTitle}>
				<h1>Task List</h1>
				<AddTaskButton showAddView ={ showAddView } />
			</div>
			{addView.statusAddView && <AddModal onSetAddView={onSetAddView} />}
		</>
	);
};

export default ViewTaskHeader;

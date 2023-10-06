import ViewTaskHeader from "./components/header/ViewTaskHeader";
import TaskList from "./components/taskComponent/TaskList";
import Wrapper from "./components/UI/wrapper/Wrapper";
import TaskContext from "./store/task-list";
import DeleteModal from "./components/modal/deleteModal/DeleteModal";
import EditModal from "./components/modal/editModal/EditModal";
import AddModal from "./components/modal/addModal/AddModal";

import { useContext } from "react";

const App = () => {
	const { editView, deleteView, addView } =
    useContext(TaskContext);
	return (
		<Wrapper>
			<ViewTaskHeader />
			<TaskList />
			{editView.statusEditView && <EditModal />}
			{deleteView.statusDeleteView && <DeleteModal />}
			{addView.statusAddView && <AddModal />}
		</Wrapper>
	);
};

export default App;

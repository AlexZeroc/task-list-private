import { useContext } from "react";
import ViewTaskHeader from "./components/header/ViewTaskHeader";
import TaskList from "./components/taskComponent/TaskList";
import Wrapper from "./components/UI/wrapper/Wrapper";
import TaskContext from "./store/task-list";
import DeleteModal from "./components/modal/deleteModal/DeleteModal";
import EditModal from "./components/modal/editModal/EditModal";
import AddModal from "./components/modal/addModal/AddModal";

const App = () => {
  const { modalEditView, modalDeleteView, modalAddView } =
    useContext(TaskContext);
  return (
    <Wrapper>
      <ViewTaskHeader />
      <TaskList />
      {modalEditView.statusModal && <EditModal />}
      {modalDeleteView.statusModalDelete && <DeleteModal />}
      {modalAddView.statusAddModal && <AddModal />}
    </Wrapper>
  );
};

export default App;

import TaskList from './TasksList';

import ViewTaskHeader from '../header/ViewTaskHeader';
import Wrapper from '../UI/wrapper/Wrapper';

const TaskListPage = () => {
  return (
    <Wrapper>
      <ViewTaskHeader />
      <TaskList />
    </Wrapper>
  );
};

export default TaskListPage;

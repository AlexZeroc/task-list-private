import Wrapper from '../components/UI/wrapper/Wrapper'
import ViewTaskHeader from '../components/header/ViewTaskHeader'
import TaskList from '../components/taskComponent/TasksList'

const TaskPage = () => {
  return (
    <Wrapper>
      <ViewTaskHeader />
      <TaskList />
    </Wrapper>
  )
}

export default TaskPage

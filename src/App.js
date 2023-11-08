import TaskListPage from './components/taskComponent/TaskListPage';
import ErrorPage from './components/error/ErrorPage';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <TaskListPage />,
      },
      {
        path: ':taskId',
        element: <TaskDetailsPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

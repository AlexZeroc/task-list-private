import TaskPage from './page/TaskPage';
import ErrorPage from './page/ErrorPage';
import DetailTaskPage from './page/detailTaskPage/DetailTaskPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <ErrorPage />,

		children: [{
			index: true,
			element: <TaskPage/>
		},
		{
			path: ":taskId",
			element: <DetailTaskPage/>
		}]

	},
]);


const App = () => {

	return (
		<RouterProvider router={router} />	

	);
};

export default App;

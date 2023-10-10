import TaskPage from './page/TaskPage';
import ErrorPage from './page/ErrorPage';

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
		}]

	},
]);


const App = () => {

	return (
		<RouterProvider router={router} />	

	);
};

export default App;

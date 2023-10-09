import TaskPage from './page/TaskPage';
import RootLayout from './page/RootLayout';
import NotesPage from './page/NotesPage';
import ErrorPage from './page/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout/>,
		errorElement: <ErrorPage />,

		children: [{
			index: true,
			element: <TaskPage/>
		},
		{
			path: ":taskId",
			element: <NotesPage/>
		}]

	},
]);


const App = () => {

	return (
		<RouterProvider router={router} />	

	);
};

export default App;

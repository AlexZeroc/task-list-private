import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import App from "./App";
import Notes from './components/notes/Notes';
import reportWebVitals from "./reportWebVitals";
import { TaskContextProvider } from "./store/task-list";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter( [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: ":id",
				element: <Notes/>
			}
		]
	},
] );




const root = createRoot( document.getElementById( "root" ) );
root.render(
	<React.StrictMode>
		<TaskContextProvider>
			<RouterProvider router={router} />		
		</TaskContextProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

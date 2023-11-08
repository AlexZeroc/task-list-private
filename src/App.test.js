import TaskListPage from './components/taskComponent/TaskListPage';
import ErrorPage from './components/error/ErrorPage';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';
import { store } from './store/store';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('App component', () => {
  it('App render', () => {
    const routes = [
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
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ['/', '/1'],
      initialIndex: 0,
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });
});

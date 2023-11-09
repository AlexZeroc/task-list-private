import TaskListPage from './components/taskComponent/TaskListPage';
import ErrorPage from './components/error/ErrorPage';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';
import { store } from './store/store';

import { Provider } from 'react-redux';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('app components test', () => {
  it('App render test', () => {
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
      initialEntries: ['/'],
      initialIndex: 0,
    });

    // Arrange
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });
});

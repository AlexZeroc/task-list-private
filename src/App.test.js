import TaskListPage from './components/taskComponent/TaskListPage';
import ErrorPage from './components/error/ErrorPage';
import TaskDetailsPage from './components/TaskDetailsPage/TaskDetailsPage';
import { store } from './store/store';

import { Provider } from 'react-redux';
import nock from 'nock';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
const routerRender = (url) => {
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
    initialEntries: [`${url}`],
  });

  return router;
};
const obj = nock('https://api.fake-rest.refine.dev').get('/');

const myMock = jest.fn((x) => console.log(x, 'test'));

describe('app components test', () => {
  it('App render test', async () => {
    myMock(obj);

    // Arrange
    render(
      <Provider store={store}>
        <RouterProvider router={routerRender('/')} />
      </Provider>
    );
  });
});

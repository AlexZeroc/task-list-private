import TaskPage from './page/TaskPage';
import ErrorPage from './page/ErrorPage';
import DetailTaskPage from './page/detailTaskPage/DetailTaskPage';

import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('event route', async () => {
  const routes = [
    {
      path: '/',
      errorElement: <ErrorPage />,

      children: [
        {
          index: true,
          element: <TaskPage />,
        },
        {
          path: ':taskId',
          element: <DetailTaskPage />,
        },
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/Task/i)).toBeInTheDocument();
});

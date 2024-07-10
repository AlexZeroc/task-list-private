import { render, screen } from '@testing-library/react';
import TaskListPage from './TaskListPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

test('TaskListPage components test', () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <TaskListPage />
    </Provider>
  );

  // ACT
  const linkElement = screen.getByText(/Task List/i);
  const btn = screen.getByRole('button');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(btn).toHaveTextContent('Add Task');
});

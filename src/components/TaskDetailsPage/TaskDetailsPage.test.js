import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import TaskDetailsPage from './TaskDetailsPage';

test('TaskListPage components test', () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <TaskDetailsPage />
    </Provider>
  );
  // ACT
  const spinnerElement = screen.getByTestId('spinner');

  // ASSERT
  expect(spinnerElement).toBeInTheDocument();
});

import { Provider } from 'react-redux';
import TaskDetailsPage from './TaskDetailsPage';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';

describe('TaskDetailsPage components', () => {
  it('TaskDetailsPage renders', () => {
    // Arrange
    render(
      <Provider store={store}>
        <TaskDetailsPage />
      </Provider>
    );
  });
});

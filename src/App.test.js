import { render, screen } from '@testing-library/react';

import { store } from './store/store';
import App from './App';
import { Provider } from 'react-redux';

test('Test App components', () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // ACT
  const linkElement = screen.getByText(/Task List/i);
  const btn = screen.getByRole('button');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(btn).toHaveTextContent('Add Task');
});

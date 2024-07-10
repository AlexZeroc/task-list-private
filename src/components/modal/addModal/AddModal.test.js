import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import AddModal from './AddModal';
import { store } from '../../../store/store';

test('AddModal components test', () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <AddModal />
    </Provider>
  );

  // ACT
  const linkElement = screen.getByText(/Your task/i);
  const btn = screen.getByRole('button');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(btn).toHaveTextContent('Add');
});

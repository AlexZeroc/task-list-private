import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import EditModal from './EditModal';
import { store } from '../../../store/store';

test('EditModal components test', () => {
  // ARRANGE
  render(
    <Provider store={store}>
      <EditModal editView={{ name: 'test' }} />
    </Provider>
  );

  // ACT
  const linkElement = screen.getByText(/Your task/i);
  const btn = screen.getByRole('button');
  const inputElement = screen.getByPlaceholderText('test');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(btn).toHaveTextContent('Edit');
});

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import DeleteModal from './DeleteModal';
import { store } from '../../../store/store';
import { BrowserRouter } from 'react-router-dom';

test('DeleteModal components test', () => {
  // ARRANGE
  render(
    <BrowserRouter>
      <Provider store={store}>
        <DeleteModal />
      </Provider>
    </BrowserRouter>
  );

  // ACT
  const linkElement = screen.getByText(
    /Are you sure you want to delete this task?/i
  );
  const btnDelete = screen.getByText('Delete');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(btnDelete).toBeInTheDocument();
});
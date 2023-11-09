import DeleteModal from './DeleteModal';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { render, screen } from '@testing-library/react';

describe('DeleteModal components', () => {
  it('DeleteModal renders', () => {
    // Arrange
    render(
      <Provider store={store}>
        <DeleteModal />
      </Provider>
    );
  });
});

import { Provider } from 'react-redux';
import EditModal from './EditModal';
import { store } from '../../../store/store';
import { render, screen } from '@testing-library/react';

describe('EditModal components', () => {
  it('EditModal renders', () => {
    // Arrange
    render(
      <Provider store={store}>
        <EditModal />
      </Provider>
    );
  });
});

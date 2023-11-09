import { Provider } from 'react-redux';
import AddModal from './AddModal';
import { store } from '../../../store/store';
import { render, screen } from '@testing-library/react';

describe('AddModal components', () => {
  it('AddModal renders', () => {
    // Arrange
    render(
      <Provider store={store}>
        <AddModal />
      </Provider>
    );
  });
});

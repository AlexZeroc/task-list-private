import ViewTaskHeader from './ViewTaskHeader';

import { render, screen } from '@testing-library/react';

describe('Header components', () => {
  it('Header renders', () => {
    // Arrange
    render(<ViewTaskHeader />);
    // ASSERT
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Task List/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
  });
});

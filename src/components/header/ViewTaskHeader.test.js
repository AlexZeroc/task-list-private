import ViewTaskHeader from './ViewTaskHeader';

import { render, screen } from '@testing-library/react';

describe('Header components', () => {
  it('Header renders', () => {
    render(<ViewTaskHeader />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/Task List/i)).toBeInTheDocument();
  });
});

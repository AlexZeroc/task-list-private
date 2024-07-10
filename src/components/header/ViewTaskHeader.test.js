import { render, screen } from '@testing-library/react';
import ViewTaskHeader from './ViewTaskHeader';

test('ViewTaskHeader component test', () => {
  // ARRANGE
  render(<ViewTaskHeader />);

  // ACT
  const linkElement = screen.getByText(/Task List/i);
  const btn = screen.getByRole('button');

  // ASSERT
  expect(linkElement).toBeInTheDocument();
  expect(btn).toHaveTextContent('Add Task');
});


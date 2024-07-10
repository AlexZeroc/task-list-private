import { render, screen, fireEvent } from '@testing-library/react';
import AddTaskButton from './AddTaskButton';

describe('AddTaskButton component test', () => {
  it('Component render test', () => {
    // ARRANGE
    render(<AddTaskButton />);

    // ACT
    const btn = screen.getByRole('button');

    // ASSERT
    expect(btn).toHaveTextContent('Add Task');
  });
  it('Button click test', () => {
    // ARRANGE
    const handleClick = jest.fn();
    render(<AddTaskButton showAddView={handleClick} />);

    // ACT
    fireEvent.click(screen.getByText(/Add Task/i));

    // ASSERT
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

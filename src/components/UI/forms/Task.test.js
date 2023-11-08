import Task from './Task';

import { render } from '@testing-library/react';

const handleChangeStatus = jest.fn();
const handleShowEditView = jest.fn();
const handleShowDeleteView = jest.fn();

describe('Task component', () => {
  it('Task render', () => {
    const task = {
      id: 1,
      name: 'Test',
      priority: 1,
      status: 1,
    };
    render(
      <Task
        key={1}
        task={task}
        onChangeStatus={handleChangeStatus}
        onShowEditView={handleShowEditView}
        onShowDeleteView={handleShowDeleteView}
      />
    );
  });
});

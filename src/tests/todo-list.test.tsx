import * as React from 'react';
import { render } from '@testing-library/react';

import TodoList from '../containers';
import { TodoContext } from '../context';

describe('TodoList test', () => {
  let container;

  beforeEach(() => {
    const items = [{
      id: '001',
      date: '02.02.2020, 20:20:20',
      text: 'test',
    }];

    container = render(
      <TodoContext.Provider
        value={{
          todoAddHandler: jest.fn(),
          sortedTodos: items,
          setTodos: jest.fn(),
          todoEditing: '',
          open: true,
          handleClose: jest.fn(),
          todoDeletehandler: jest.fn(),
          undoEdits: jest.fn(),
          submitEdits: jest.fn(),
          startEdits: jest.fn(),
        }}
      >
        <TodoList />
      </TodoContext.Provider>,
    );
  });

  test('should render TodoList component', () => {
    const listElement = container.getByTestId('listComponent');
    expect(listElement).toBeDefined();
  });

  test('should render child component', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
    const itemComponent = container.getByText(/test/i);
    expect(itemComponent).toBeDefined();
  });
});

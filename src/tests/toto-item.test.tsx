import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoItem from '../components/todo-list/todo-item';
import { TodoContext } from '../context';

describe('TodoItem normal mode test', () => {
  let container;
  let todoDeletehandlerMock;
  let startEditsMock;

  beforeEach(() => {
    todoDeletehandlerMock = jest.fn();
    startEditsMock = jest.fn();

    const item = {
      id: '001',
      date: '02.02.2020, 20:20:20',
      text: 'test',
    };

    container = render(
      <TodoContext.Provider
        value={{
          todoAddHandler: jest.fn(),
          sortedTodos: [],
          setTodos: jest.fn(),
          todoEditing: '',
          open: true,
          handleClose: jest.fn(),
          todoDeletehandler: todoDeletehandlerMock,
          undoEdits: jest.fn(),
          submitEdits: jest.fn(),
          startEdits: startEditsMock,
        }}
      >
        <TodoItem todo={item} key={item.id} />
      </TodoContext.Provider>,
    );
  });

  test('should render TodoItem component', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
  });

  test('should call todoDeletehandler', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
    fireEvent.click(container.getByText(/Delete/i));
    expect(todoDeletehandlerMock).toHaveBeenCalled();
  });

  test('should call todoDeletehandler', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
    fireEvent.click(container.getByText(/Edit/i));
    expect(startEditsMock).toHaveBeenCalled();
  });
});

describe('TodoItem edit mode test', () => {
  let container;
  let undoEditsMock;
  let submitEditsMock;

  beforeEach(() => {
    undoEditsMock = jest.fn();
    submitEditsMock = jest.fn();

    const item = {
      id: '001',
      date: '20.20.2020, 20:20:20',
      text: 'test',
    };

    container = render(
      <TodoContext.Provider
        value={{
          todoAddHandler: jest.fn(),
          sortedTodos: [],
          setTodos: jest.fn(),
          todoEditing: '001',
          open: true,
          handleClose: jest.fn(),
          todoDeletehandler: jest.fn(),
          undoEdits: undoEditsMock,
          submitEdits: submitEditsMock,
          startEdits: jest.fn(),
        }}
      >
        <TodoItem todo={item} key={item.id} />
      </TodoContext.Provider>,
    );
  });

  test('should call submitEditsMock', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
    fireEvent.click(container.getByText(/Submit edits/i));
    expect(submitEditsMock).toHaveBeenCalled();
  });

  test('should call undoEditsMock', () => {
    const itemElement = container.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
    fireEvent.click(container.getByText(/Canсel/i));
    expect(undoEditsMock).toHaveBeenCalled();
  });
});

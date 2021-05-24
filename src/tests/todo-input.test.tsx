import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TodoInput from '../components/todo-input';
import { TodoContext } from '../context';

describe('TodoInput test', () => {
  let conteiner;
  let todoAddHandlerMock;

  beforeEach(() => {
    todoAddHandlerMock = jest.fn();

    conteiner = render(
      <TodoContext.Provider
        value={{
          todoAddHandler: todoAddHandlerMock,
          sortedTodos: [],
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
        <TodoInput />
      </TodoContext.Provider>,
    );
  });

  test('should render TodoInput component', () => {
    const { getByTestId } = conteiner;
    const inputContainer = getByTestId('inputComponent');
    expect(inputContainer).toBeDefined();
  });

  test('should call todoAddHandlerMock', () => {
    const { getByTestId } = conteiner;
    const inputContainer = getByTestId('inputComponent');
    fireEvent.submit(inputContainer);
    expect(todoAddHandlerMock).toHaveBeenCalled();
  });
});

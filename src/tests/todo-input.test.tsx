import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import TodoInput from '../components/todo-input';

import TodoProvider from '../context';

describe('TodoInput test', () => {
  afterEach(() => cleanup());

  let conteiner;

  beforeEach(() => {
    conteiner = render(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>,
    );
  });

  test('should render TodoInput component', () => {
    const { getByTestId } = conteiner;
    const inputConteiner = getByTestId('inputComponent');
    expect(inputConteiner).toBeDefined();
  });
});

import * as React from 'react';
import { render } from '@testing-library/react';

import TodoInput from '../components/todo-input';

import TodoProvider from '../context';

describe('TodoInput test', () => {
  let conteiner;

  beforeEach(() => {
    conteiner = render(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>,
    );
  });

  it('should render TodoInput component', () => {
    const { getByTestId } = conteiner;
    const inputConteiner = getByTestId('inputConteiner');
    expect(inputConteiner).toBeDefined();
  });
});

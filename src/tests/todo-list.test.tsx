import * as React from 'react';
import { render } from '@testing-library/react';

import TodoList from '../containers';

import TodoProvider from '../context';

describe('TodoList test', () => {
  let conteiner;

  beforeEach(() => {
    conteiner = render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>,
    );
  });

  it('should render TodoList component', () => {
    const { getByTestId } = conteiner;
    const listConteiner = getByTestId('listConteiner');
    expect(listConteiner).toBeDefined();
  });
});

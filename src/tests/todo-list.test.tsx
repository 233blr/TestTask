import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import TodoList from '../containers';

import TodoProvider from '../context';

describe('TodoList test', () => {
  afterEach(() => cleanup());

  test('should render TodoList component', () => {
    const conteiner = render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>,
    );
    const listElement = conteiner.getByTestId('listComponent');
    expect(listElement).toBeDefined();
  });
});

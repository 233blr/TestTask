import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../containers';

import TodoProvider from '../context';

describe('App test', () => {
  afterEach(() => cleanup());

  let conteiner;

  afterEach(() => cleanup());

  beforeEach(() => {
    conteiner = render(
      <TodoProvider>
        <App />
      </TodoProvider>,
    );
  });

  test('should render App component', () => {
    const { getByTestId } = conteiner;
    const appConteiner = getByTestId('appConteiner');
    expect(appConteiner).toBeDefined();
  });
});

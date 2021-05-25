import * as React from 'react';
import { render } from '@testing-library/react';

import App from '../containers';
import TodoProvider from '../context';

describe('App test', () => {
  let container;

  beforeEach(() => {
    container = render(
      <TodoProvider>
        <App />
      </TodoProvider>,
    );
  });

  test('should render App component', () => {
    const { getByTestId } = container;
    const appContainer = getByTestId('appContainer');
    expect(appContainer).toBeDefined();
  });

  test('should take a snapshot of the App component', () => {
    const { getByTestId } = container;
    const appContainer = getByTestId('appContainer');
    expect(appContainer).toMatchSnapshot();
  });
});

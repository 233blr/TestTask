import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from "./containers/App";

import TodoProvider from './context';

ReactDOM.render (
  <TodoProvider>
    <App/>
  </TodoProvider>,
    document.getElementById("root")
);
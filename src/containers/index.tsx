import * as React from 'react';

import Container from '@material-ui/core/Container';

import { TodoContext } from '../context';

import TodoList from '../components/todo-list';
import TodoInput from '../components/todo-input';

import LocalStorage from '../services';

const App: React.FC = () => {
  const { setTodos } = React.useContext(TodoContext);

  React.useEffect(() => {
    const loadedTodos = LocalStorage.get();
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  return (
    <Container data-testid="appContainer" className="App" maxWidth="xl">
      <TodoInput />
      <TodoList />
    </Container>
  );
};

export default App;

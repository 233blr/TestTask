import * as React from 'react';

import Container from '@material-ui/core/Container';

import TodoLists from '../components/todo-lists';
import TodoInput from '../components/todo-input';

import LocalStorage from '../services/local-storage';

import { TodoContext } from '../context';

import { ContextTypes } from '../types/todo.interfaces';

const App: React.FC = () => {
  const { setTodos } = React.useContext(TodoContext) as ContextTypes;

  React.useEffect(() => {
    const loadedTodos = LocalStorage.get();
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  return (
    <Container className="App" maxWidth="xl">
      <TodoInput />
      <TodoLists />
    </Container>
  );
};

export default App;

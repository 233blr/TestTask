import * as React from 'react';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { Todo } from './todo.models';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

const App:React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: '5/15/2021, 11:38:04 AM', text: 'Hello' },
    { id: '6/12/2020, 11:12:04 PM', text: 'Hello 2' },
    { id: '7/24/2020, 10:40:00 PM', text: 'Hello 3' },
  ]);

  const [alarm, setAlarm] = React.useState(false);

  const todoAddHandler = (text: string) => {
    if (text === '') {
      setAlarm(true);
      setTimeout(() => setAlarm(false), 1000);
      return;
    }
    const newTodo = {
      id: new Date().toLocaleString(),
      text,
    };
    setTodos((prefTodos) => [...prefTodos, newTodo]);
  };

  const todoDeletehandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  return (
    <Container className="App" maxWidth="xl">
      { alarm && <Alert variant="filled" severity="error">Add text!</Alert>}

      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todo={todos} onDeleteTodo={todoDeletehandler} />
    </Container>
  );
};

export default App;

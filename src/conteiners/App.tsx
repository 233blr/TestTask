import * as React from 'react';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Todo } from './todo.models';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

const useStyles = makeStyles((theme: Theme) => createStyles({
  alarm: {
    position: 'fixed',
    bottom: 20
  }
}));

const App:React.FC = () => {
  const classes = useStyles();
  
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const [alarm, setAlarm] = React.useState(false);

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  const todoAddHandler = (text: string) => {
    if (text === '') {
      setAlarm(true);
      setTimeout(() => setAlarm(false), 3000);
      return;
    }
    const newTodo = {
      id: new Date().toLocaleString(),
      text,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeletehandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const sortedTodos: {id: string; text: string}[] = todos.sort((a, b) => {
    return ((new Date(b.id) as any) - (new Date(a.id) as any))
  });

  return (
    <Container className="App" maxWidth="xl">
      { alarm && <Alert className={classes.alarm} variant="filled" severity="error">No text!</Alert>}

      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList todo={sortedTodos} onDeleteTodo={todoDeletehandler} />
    </Container>
  );
};

export default App;

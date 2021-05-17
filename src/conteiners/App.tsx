import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Todo } from './todo.models';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

const useStyles = makeStyles((theme: Theme) => createStyles({
  warning: {
    position: 'fixed',
    bottom: 20
  }
}));

const App:React.FC = () => {
  const classes = useStyles();
  
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todoEditing, setTodoEditing] = React.useState<string | null>(null);

  const [warning, setWarning] = React.useState(false); // for alert message

  React.useEffect(() => {
    const json = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos', json);
  }, [todos]);

  const todoAddHandler = (text: string) => {
    if (text === '') {
      setWarning(true);
      setTimeout(() => setWarning(false), 3000);
      return;
    }
    const newTodo = {
      id: uuidv4(),
      date: new Date().toLocaleString(),
      text
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeletehandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const canсelEdits = () => setTodoEditing(null);

  const submitEdits = (id, editingText) => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.date = new Date().toLocaleString();
      }
      return todo;
    });
    setTodos(updatedTodos);
    canсelEdits();
  }

  const sortedTodos: {id: string; date: string; text: string}[] = [...todos].sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return (dateB as any) - (dateA as any);
  });
  
  return (
    <Container className="App" maxWidth="xl">

      { warning && <Alert className={classes.warning} variant="filled" severity="error">No text!</Alert>}

      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList
        todo={sortedTodos}
        edit={todoEditing}
        onDeleteTodo={todoDeletehandler}
        onEditTodo={setTodoEditing}
        onAddTodoEdits={submitEdits}
        onCanсelHandler={canсelEdits}
      />
    </Container>
  );
};

export default App;

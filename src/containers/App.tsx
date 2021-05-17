import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from '@material-ui/core/Container';
import Snackbar from "@material-ui/core/Snackbar";

import { Todo } from '../types/todo.interfaces';

import LocalStorage from '../services/local-storage';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [todoEditing, setTodoEditing] = React.useState<string | null>(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const loadedTodos = LocalStorage.get();
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    LocalStorage.set(todos);
  }, [todos]);

  const todoAddHandler = (text: string) => {
    if (text === '') {
      setOpen(true);
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

  const sortedTodos: Todo[] = [...todos].sort((a, b) => {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return (dateB as any) - (dateA as any);
  });

  return (
    <Container className="App" maxWidth="xl">

      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="No text!"
      />

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

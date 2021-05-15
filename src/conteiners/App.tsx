import * as React from 'react';

import { Todo } from './todo.models';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

import Container from '@material-ui/core/Container';
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App:React.FC = () => {
    const [todos, setTodos] = React.useState<Todo[]>([
      {id: '5/15/2021, 11:38:04 AM', text: 'Hello'},
      {id: '6/12/2020, 11:12:04 PM', text: 'Hello 2'},
      {id: '7/24/2020, 10:40:00 PM', text: 'Hello 3'},
    ]);

  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

    const todoAddHandler = (text: string) => {
      if (text === '') {
        handleOpenModal();
        return;
      }
      setTodos(prefTodos => [...prefTodos, {id: new Date().toLocaleString(), text: text}]);
    };

    const todoDeletehandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(item => item.id !== todoId)
      })
    }

    return (
          <Container className="App" maxWidth="xl">

            <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseModal}>
              <Alert onClose={handleCloseModal} severity="error">Add text!</Alert>
            </Snackbar>

            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList todo={todos} onDeleteTodo={todoDeletehandler}/>
          </Container>
    )
}

export default App;

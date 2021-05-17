import * as React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '100%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface TodoListProps {
    todo: {id: string, date: string,  text: string}[];
    edit: string;
    onDeleteTodo: (id: string) => void;
    onEditTodo: (id: string) => void;
    onAddTodoEdits: (id: string, editText: string) => void;
    onCanсelHandler: () => void;
  }

const TodoLists: React.FC<TodoListProps> = ({ todo, edit, onDeleteTodo, onEditTodo, onAddTodoEdits, onCanсelHandler }) => {
  const classes = useStyles();

  const textInputRef = React.useRef<HTMLInputElement>(null);
  
  const todoEditsHandler = (id: string) => {
    let enteredText: {current: null | HTMLInputElement} = textInputRef;
    onAddTodoEdits(id, enteredText.current.value);
  }
  
  return (
    <div className={classes.root}>
      {todo && todo.map((todo) => (
        <Paper key={todo.id} className={classes.paper}>
          <Grid container direction="column" wrap="nowrap" spacing={2}>
            <Grid item xs>
              <Typography variant="caption" display="block" gutterBottom>
                {todo.date}
              </Typography>

              { todo.id === edit ? <Input
                  inputRef={textInputRef}
                  autoFocus
                  fullWidth
                  defaultValue={todo.text}
                /> : <Typography noWrap>{todo.text}</Typography>
              }

            </Grid>
            <Grid item xs>
              <Button
                onClick={onDeleteTodo.bind(null, todo.id)}
                className={classes.button}
                variant="contained"
                color="secondary"
                size="small"
              >
                Delete
              </Button>

              { todo.id === edit ? <Button
                onClick={todoEditsHandler.bind(null, todo.id)}
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
              >
                Submit edits
              </Button> : <Button
                onClick={onEditTodo.bind(null, todo.id)}
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
              >
                Edit
              </Button>
              }

              { todo.id === edit && <Button
                onClick={onCanсelHandler}
                className={classes.button}
                variant="contained"
                size="small"
              >
                Canсel
              </Button>
              }

            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default TodoLists;

import * as React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { TodoContext } from '../../../context';

const useStyles = makeStyles((theme: Theme) => createStyles({
  paper: {
    maxWidth: '100%',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const TodoItem: any = ({ todo }) => {
  const {
    todoEditing,
    submitEdits,
    undoEdits,
    todoDeletehandler,
    startEdits,
  } = React.useContext(TodoContext);
  const classes = useStyles();

  const textInputRef = React.useRef<HTMLInputElement>(null);

  const todoEditsHandler = (id: string) => {
    const enteredText: { current: null | HTMLInputElement } = textInputRef;
    submitEdits(id, enteredText.current.value);
  };

  return (
    <Paper data-testid="itemConteiner" key={todo.id} className={classes.paper}>
      <Grid
        container direction="column" wrap="nowrap"
        spacing={2}
      >
        <Grid item xs>
          <Typography variant="caption" display="block" gutterBottom>
            {todo.date}
          </Typography>

          {todo.id === todoEditing ? (
            <Input
              inputRef={textInputRef}
              autoFocus
              fullWidth
              defaultValue={todo.text}
            />
          ) : <Typography noWrap>{todo.text}</Typography>}

        </Grid>
        <Grid item xs>
          <Button
            onClick={() => todoDeletehandler(todo.id)}
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
          >
            Delete
          </Button>

          {todo.id === todoEditing ? (
            <Button
              onClick={() => todoEditsHandler(todo.id)}
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
            >
              Submit edits
            </Button>
          ) : (
            <Button
              onClick={() => startEdits(todo.id)}
              className={classes.button}
              variant="contained"
              color="primary"
              size="small"
            >
              Edit
            </Button>
          )}

          {todo.id === todoEditing && (
            <Button
              onClick={undoEdits}
              className={classes.button}
              variant="contained"
              size="small"
            >
              Canсel
            </Button>
          )}

        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoItem;

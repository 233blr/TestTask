import * as React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import { TodoContext } from '../../context';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const TodoInput: React.FC = () => {
  const { open, handleClose, todoAddHandler } = React.useContext(TodoContext);

  const textInputRef = React.useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef;
    todoAddHandler(enteredText.current.value);
    enteredText.current.value = '';
  };

  const classes = useStyles();

  return (
    <form
      data-testid="inputComponent"
      onSubmit={todoSubmitHandler}
      className={classes.root}
    >

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        message="No text!"
      />

      <TextField
        inputRef={textInputRef}
        type="text"
        label="TODO"
        placeholder="Add text"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        margin="normal"
        size="small"
      />

      <IconButton
        className={classes.margin}
        type="submit"
        color="primary"
        aria-label="save"
      >
        <SaveIcon />
      </IconButton>
    </form>
  );
};

export default TodoInput;

import * as React from 'react';

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row"
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
);

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = React.useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let enteredText = textInputRef;
        onAddTodo(enteredText.current.value);
        enteredText.current.value = '';
    }

    const classes = useStyles();

  return (
    <form onSubmit={todoSubmitHandler} className={classes.root}>
        <TextField
            inputRef={textInputRef}
            type="text"
            label="TODO"
            placeholder="Add text"
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
            margin="normal"
            size="small"
        />
        <IconButton className={classes.margin} type="submit" color="primary" aria-label="save">
            <SaveIcon />
        </IconButton>
    </form>
  );
}

export default NewTodo;

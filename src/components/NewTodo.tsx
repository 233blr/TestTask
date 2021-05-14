import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import Grid from '@material-ui/core/Grid';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = React.useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        let enteredText = textInputRef;
        onAddTodo(enteredText.current.value)
    }

    return (
        <form onSubmit={todoSubmitHandler} className='NewTodo'>
            <Grid container spacing={1} alignItems="center">
                <Grid item>
                    <TextField inputRef={textInputRef} type="text" id="todo-text" label="Add text" />
                </Grid>
                <Grid item>
                    <IconButton type="submit" color="primary" aria-label="save">
                       <SaveIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </form>
    )
}

export default NewTodo;

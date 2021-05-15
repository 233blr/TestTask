import * as React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3)
      },
    paper: {
      maxWidth: '100%',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
    })
  );

interface TodoListProps {
    todo: {id: string, text: string}[];
    onDeleteTodo: (id: string) => void;
  };

const TodoLists: React.FC<TodoListProps> = ({todo, onDeleteTodo}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {todo && todo.map(todo => {
              return(
                <Paper key={todo.id} className={classes.paper}>
                  <Grid container direction="column" wrap="nowrap" spacing={2}>
                    <Grid item xs>
                      <Typography variant="caption" display="block" gutterBottom>
                        {todo.id}
                      </Typography>
                      <Typography noWrap>
                        {todo.text}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Button className={classes.button} variant="contained" color="primary" size="small">Edit</Button>
                      <Button onClick={onDeleteTodo.bind(null, todo.id)} className={classes.button} variant="contained" color="secondary" size="small">Delete</Button>
                    </Grid>
                  </Grid>
                </Paper>
              )}
            )}
        </div>
    )
}

export default TodoLists;

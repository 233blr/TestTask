import * as React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

interface TodoListProps {
    todo: {id: string, date: string, text: string}[];
    onDeleteTodo: (id: string) => void;
  };

const TodoLists: React.FC<TodoListProps> = ({todo, onDeleteTodo}) => {
    return (
        <Grid container direction="column" justify="flex-start" alignItems="stretch">
            {todo.map(todo => {
                return (
                <Card key={todo.id} variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{todo.date}</Typography>
                        <Typography variant="h5" component="h2">{todo.text}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton aria-label="delete">
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={onDeleteTodo.bind(null, todo.id)} aria-label="delete" color='secondary'>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                    )
                }
            )
        }    
        </Grid>
    )
}

export default TodoLists;

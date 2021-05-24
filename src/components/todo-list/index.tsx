import * as React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TodoItem from './todo-item';

import { TodoContext } from '../../context';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
}));

const TodoList: React.FC = () => {
  const { sortedTodos } = React.useContext(TodoContext);
  const classes = useStyles();

  return (
    <div data-testid="listComponent" className={classes.root}>
      {sortedTodos.map((item) => <TodoItem key={item.id} todo={item} />)}
    </div>
  );
};

export default TodoList;

import * as React from 'react';

import TodoList from './todo-list';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { TodoContext } from '../../context';

import { ContextTypes } from '../../types/todo.interfaces';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  }
}));

const TodoLists: React.FC = () => {
  const { sortedTodos } = React.useContext(TodoContext) as ContextTypes;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {sortedTodos && sortedTodos.map(item => <TodoList key={item.id} todo={item} />)}
    </div>
  );
};

export default TodoLists;

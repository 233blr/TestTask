import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Todo } from './todo.models';

import TodoList from '../components/TodoLists';
import NewTodo from '../components/NewTodo';

import Container from '@material-ui/core/Container';

const App:React.FC = () => {
    const [todos, setTodos] = React.useState<Todo[]>([
      {id: 't1', date: '10/12/21', text: 'Hello'},
      {id: 't2', date: '11/11/21', text: 'Hello 2'},
      {id: 't3', date: '04.09.21', text: 'Hello 3'},
    ]);

    const todoAddHandler = (text: string) => {
      setTodos(prefTodos => [...prefTodos, {id: uuidv4(), date: new Date().toLocaleString(), text: text}]);
    };

    const todoDeletehandler = (todoId: string) => {
      setTodos(prevTodos => {
        return prevTodos.filter(item => item.id !== todoId)
      })
    }

    return (
          <Container className="App" maxWidth="sm">
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList todo={todos} onDeleteTodo={todoDeletehandler}/>
          </Container>
    )
}

export default App;

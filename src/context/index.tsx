import * as React from 'react';

import { v4 as uuidv4 } from 'uuid';

import LocalStorage from '../services/local-storage';

import { ContextTypes, Todo } from '../types/todo.interfaces';

export const TodoContext = React.createContext<ContextTypes | null>(null);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    LocalStorage.set(todos);
  }, [todos]);

  const sortedTodos: Todo[] = [...todos].sort((a, b) => {
    const itemA = new Date(a.date).getTime();
    const itemB = new Date(b.date).getTime();
    return (itemB as any) - (itemA as any);
  });

  const [todoEditing, setTodoEditing] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const todoAddHandler = (text: string) => {
    if (text === '') {
      setOpen(true);
      return;
    }
    const newTodo = {
      id: uuidv4(),
      date: new Date().toLocaleString(),
      text
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeletehandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const canсelEdits = () => setTodoEditing(null);

  const submitEdits = (id: string, editingText: string) => {
    const updatedTodos = [...todos].map(todo => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.date = new Date().toLocaleString();
      }
      return todo;
    });
    setTodos(updatedTodos);
    canсelEdits();
  }

  const startEdits = (id: string) => setTodoEditing(id);

  return (
    <TodoContext.Provider value={
      {
        sortedTodos,
        setTodos,
        todoEditing,
        open,
        handleClose,
        todoAddHandler,
        todoDeletehandler,
        canсelEdits,
        submitEdits,
        startEdits
      }
      }>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

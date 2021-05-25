import * as React from 'react';

import { v4 as uuidv4 } from 'uuid';

import LocalStorage from '../services';

import { ContextTypes, Todo } from '../interfaces';

export const TodoContext = React.createContext<ContextTypes | null>(null);

const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    LocalStorage.set(todos);
  }, [todos]);

  const sortedTodos: Todo[] = [...todos].sort((b, a) => {
    if (b.date < a.date) return 1;
    if (b.date > a.date) return -1;
    return 0;
  });

  const [todoEditing, setTodoEditing] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const todoAddHandler = (text: string) => {
    const todoText = text.trim();
    if (todoText === '') {
      setOpen(true);
      return;
    }
    const newTodo = {
      id: uuidv4(),
      date: new Date().toLocaleString(),
      text: todoText,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeletehandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

  const undoEdits = () => setTodoEditing(null);

  const submitEdits = (id: string, editingText: string) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
        todo.date = new Date().toLocaleString();
      }
      return todo;
    });
    setTodos(updatedTodos);
    undoEdits();
  };

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
        undoEdits,
        submitEdits,
        startEdits,
      }
      }
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

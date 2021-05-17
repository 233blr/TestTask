export interface Todo {
  id: string,
  date: string,
  text: string
};

export interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
};

export interface TodoListProps {
  todo: { id: string, date: string, text: string }[];
  edit: string;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string) => void;
  onAddTodoEdits: (id: string, editText: string) => void;
  onCanсelHandler: () => void;
};
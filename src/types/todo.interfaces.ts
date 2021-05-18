export interface Todo {
  id: string,
  date: string,
  text: string
};

export interface ContextTypes {
  sortedTodos: { id: string, date: string, text: string }[];
  setTodos: any;
  todoEditing: string | null;
  open: boolean;
  handleClose: () => void;
  todoAddHandler: (text: string) => void;
  todoDeletehandler: (todoId: string) => void;
  canсelEdits: () => void;
  submitEdits: (id: string, editingText: string) => void;
  startEdits: (id: string) => void;
};

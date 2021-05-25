export interface Todo {
  id: string,
  date: string,
  text: string
}

export interface ContextTypes {
  sortedTodos: Todo[];
  setTodos: any;
  todoEditing: string | null;
  open: boolean;
  handleClose: () => void;
  todoAddHandler: (text: string) => void;
  todoDeletehandler: (todoId: string) => void;
  undoEdits: () => void;
  submitEdits: (id: string, editingText: string) => void;
  startEdits: (id: string) => void;
}

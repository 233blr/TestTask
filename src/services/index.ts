import { Todo } from '../interfaces';

const LocalStorage = {
  get(): Todo[] {
    const json = localStorage.getItem('todos');
    return JSON.parse(json);
  },
  set(todos: Todo[]): void {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos', json);
  },
};

export default LocalStorage;

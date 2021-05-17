const LocalStorage = {
  get() {
    const json = localStorage.getItem('todos');
    return JSON.parse(json);
  },
  set(todos) {
    const json = JSON.stringify(todos);
    localStorage.setItem('todos', json);
  }
}

export default LocalStorage;
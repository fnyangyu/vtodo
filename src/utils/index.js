export const filterTodos = (todos, filter) => {
  if (filter === 'COMPL') {
    return todos.filter(t => t.compl === false)
  }
  return todos
}
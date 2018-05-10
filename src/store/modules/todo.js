const state = {
  all: [
    {
      id: '1',
      body: 'GTA V',
      compl: false
    },
    {
      id: '2',
      body: 'CSGO',
      compl: false
    },
    {
      id: '3',
      body: 'FOR HONOR',
      compl: false
    }
  ],
  currentFilter: 'ALL'
}

const mutations = {
  addTodo(state, todo) {
    state.all.push(todo)
  },
  close(state, id) {
    state.all = state.all.map(todo => {
      if (id === todo.id) todo.compl = true
      return todo
    })
  },
  setFilter(state, filter) {
    state.currentFilter = filter
  }
}

export default {
  mutations,
  state
}
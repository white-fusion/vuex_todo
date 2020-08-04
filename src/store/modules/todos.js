
const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async addTodo({ commit }, rcvd) {
    const todo = {
        id: rcvd.newId,
        title: rcvd.title,
        completed: false
    };  
    commit('newTodo', todo);
  },
  async deleteTodo({ commit }, id) {
    commit('removeTodo', id);
  },
  async updateTodo({ commit }, id) {
    commit('markTodo', id);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),  //unshift to enter at start
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  markTodo: (state, id) => {
    const item = state.todos.find(todo => todo.id === id);
    item.completed = !item.completed;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};

const state = {
  categories: [
    {
      title:'Home',
      id:'0'
    },
    {
      title:'School',
      id:'1'
    },
    {
      title:'Personal',
      id:'2'
    },
    {
      title:'Work',
      id:'3'
    }
  ],
  todos: []
};

const getters = {
  allTodos: state => state.todos,
  allCategories: state => state.categories
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
  },
  async addCateg({ commit }, rcvd) {
    const categ = {
      id: rcvd.id,
      title: rcvd.title
    };
    commit('newCateg', categ);
  }
};

const mutations = {
  newTodo: (state, todo) => state.todos.push(todo),  //unshift to enter at start
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  markTodo: (state, id) => {
    const item = state.todos.find(todo => todo.id === id);
    item.completed = !item.completed;
  },
  newCateg: (state, categ) => state.categories.push(categ),
};

export default {
  state,
  getters,
  actions,
  mutations
};
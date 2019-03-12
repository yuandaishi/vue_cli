import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'yuands',
    age: '100'
  },
  mutations: {
    changeName: function (state, val) {
      state.name = val
    }
  },
  getters: {
    message: function (state) {
      return state.name + state.age
    }
  }
})

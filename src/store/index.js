import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import city from './modules/city'
import cinema from './modules/cinema'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    film,
    city,
    cinema
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import { getComingsoon } from '@/network/film/comingsoon'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingList: []
  },
  mutations: {
    hideTabbar (state, data) {
      state.isTabbarShow = data
    },
    showTabbar (state, data) {
      state.isTabbarShow = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    getComingListAction (store) {
      getComingsoon().then(res => {
        console.log(res.data.data.films)
        store.commit('comingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})

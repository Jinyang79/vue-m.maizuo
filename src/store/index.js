import Vue from 'vue'
import Vuex from 'vuex'
import { getComingsoon } from '@/network/film/comingsoon'
import { getNowplaying } from '@/network/film/nowplaying'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingSoonList: [],
    nowPlayingList: []
  },
  mutations: {
    hideTabbar (state, data) {
      state.isTabbarShow = data
    },
    showTabbar (state, data) {
      state.isTabbarShow = data
    },
    comingSoonListMutation (state, data) {
      state.comingSoonList = data
    },
    nowPlayingListMutation (state, data) {
      state.nowPlayingList = data
    }
  },
  actions: {
    getComingSoonListAction (store) {
      getComingsoon().then(res => {
        console.log(res.data.data.films)
        store.commit('comingSoonListMutation', res.data.data.films)
      })
    },
    getNowPlayingListAction (store) {
      getNowplaying().then(res => {
        console.log(res.data.data.films)
        store.commit('nowPlayingListMutation', res.data.data.films)
      })
    }
  },
  modules: {
  }
})

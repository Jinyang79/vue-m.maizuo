import Vue from 'vue'
import Vuex from 'vuex'
import { getComingsoon } from '@/network/film/comingsoon'
import { getNowplaying } from '@/network/film/nowplaying'
import { HIDE_TABBAR, SHOW_TABBAR, COMING_SOON_LIST, NOW_PLAYING_LIST } from '@/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingSoonList: [],
    nowPlayingList: []
  },
  mutations: {
    [HIDE_TABBAR] (state, data) {
      state.isTabbarShow = data
    },
    [SHOW_TABBAR] (state, data) {
      state.isTabbarShow = data
    },
    [COMING_SOON_LIST] (state, data) {
      state.comingSoonList = data
    },
    [NOW_PLAYING_LIST] (state, data) {
      state.nowPlayingList = data
    }
  },
  actions: {
    getComingSoonList (store) {
      getComingsoon().then(res => {
        console.log(res.data.data.films)
        store.commit(COMING_SOON_LIST, res.data.data.films)
      })
    },
    getNowPlayingList (store) {
      getNowplaying().then(res => {
        console.log(res.data.data.films)
        store.commit(NOW_PLAYING_LIST, res.data.data.films)
      })
    }
  },
  modules: {
  }
})

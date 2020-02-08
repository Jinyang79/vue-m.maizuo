import { COMING_SOON_LIST, NOW_PLAYING_LIST } from '../mutation-types'
import { Indicator } from 'mint-ui'
import { getComingsoon } from '@/api/film/comingsoon'
import { getNowplaying } from '@/api/film/nowplaying'
const film = {
  namespaced: true,
  state: {
    comingSoonList: [],
    nowPlayingList: []
  },
  mutations: {
    [COMING_SOON_LIST] (state, data) {
      state.comingSoonList = data
    },
    [NOW_PLAYING_LIST] (state, data) {
      state.nowPlayingList = data
    }
  },
  actions: {
    // 获取即将上映数据
    getComingSoonList (store) {
      // vant 加载开启
      Indicator.open()
      // 通过本地存储获取城市ID
      const id = localStorage.getItem('cityId')
      // 发送数据请求
      getComingsoon(id).then(res => {
        console.log(res.data.data.films)
        // 提交到 mutation
        store.commit(COMING_SOON_LIST, res.data.data.films)
        // vant 加载关闭
        Indicator.close()
      })
    },
    // 获取正在上映数据
    getNowPlayingList (store) {
      Indicator.open()
      const id = localStorage.getItem('cityId')
      getNowplaying(id).then(res => {
        console.log(res.data.data.films)
        store.commit(NOW_PLAYING_LIST, res.data.data.films)
        Indicator.close()
      })
    }
  }
}
export default film

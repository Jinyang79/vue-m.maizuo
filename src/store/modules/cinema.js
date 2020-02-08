import { getCinema } from '@/api/cinema/cinema'
import { Indicator } from 'mint-ui'
import { CINEMA_LIST } from '../mutation-types'

const cinema = {
  namespaced: true,
  state: {
    cinemaList: []
  },
  mutations: {
    [CINEMA_LIST] (state, data) {
      state.cinemaList = data
    }
  },
  actions: {
    // 获取电影院数据
    getCinemaList (store) {
      Indicator.open()
      const id = localStorage.getItem('cityId')
      getCinema(id).then(res => {
        console.log(res)
        store.commit(CINEMA_LIST, res.data.data.cinemas)
        Indicator.close()
      })
    }
  }
}
export default cinema

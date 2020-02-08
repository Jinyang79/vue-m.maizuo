import { getCity } from '@/api/city'
import { Indicator } from 'mint-ui'
import { HIDE_TABBAR, SHOW_TABBAR, CITY_LIST } from '../mutation-types'
const city = {
  namespaced: true,
  state: {
    isTabbarShow: true,
    cityList: []
  },
  mutations: {
    [HIDE_TABBAR] (state, data) {
      state.isTabbarShow = data
    },
    [SHOW_TABBAR] (state, data) {
      state.isTabbarShow = data
    },
    [CITY_LIST] (state, data) {
      state.cityList = data
    }
  },
  actions: {
    getCityList (store) {
      Indicator.open()
      getCity().then(res => {
        // console.log(res.data.data.cities)
        // this.dataList = this.getCityList(res.data.data.cities)
        store.commit(CITY_LIST, res.data.data.cities)
        Indicator.close()
      })
    }
  }
}
export default city

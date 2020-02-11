import { getCity } from '@/api/city'
import { Indicator } from 'mint-ui'
import { HIDE_TABBAR, SHOW_TABBAR, CITY_LIST, CHANGE_CITY } from '../mutation-types'
const city = {
  namespaced: true,
  state: {
    // 控制tabbar显示
    isTabbarShow: true,
    // 城市列表
    cityList: localStorage.getItem('cityList') ? JSON.parse(localStorage.getItem('cityList')) : [],
    // 当前选择城市的 ID
    cityId: localStorage.getItem('cityId') ? localStorage.getItem('cityId') - 0 : ''
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
    },
    [CHANGE_CITY] (state, data) {
      state.cityId = data
    }
  },
  actions: {
    getCityList (store) {
      Indicator.open()
      getCity().then(res => {
        // console.log(res.data.data.cities)
        // this.dataList = this.getCityList(res.data.data.cities)
        window.localStorage.setItem('cityList', JSON.stringify(res.data.data.cities))
        store.commit(CITY_LIST, res.data.data.cities)
        Indicator.close()
      })
    }
  },
  getters: {
    /* 城市列表 二维数组 */
    cityListGetter: state => {
      const letterArr = []
      const newList = []
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)
      for (let j = 0; j < letterArr.length; j++) {
        const arr = state.cityList.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        if (arr.length > 0) {
          newList.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      console.log(newList)
      return newList
    },
    // 热门城市列表
    hotCity (state) {
      return state.cityList.filter(item => item.isHot)
    },
    // 当前城市
    cityName (state) {
      console.log(state.cityId)
      return state.cityList.find(item => item.cityId === state.cityId)
    }
  }
}
export default city

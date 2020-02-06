<template>
  <mt-index-list>
    <mt-index-section :index="data.index"
                      v-for="data in dataList"
                      :key="data.index">
      <div v-for="city in data.list"
           :key="city.index"
           @click="handleClick(city.cityId)">
        <mt-cell :title="city.name"></mt-cell>
      </div>
    </mt-index-section>
  </mt-index-list>
</template>
<script>
import { getCity } from '@/network/city'
import { HIDE_TABBAR, SHOW_TABBAR } from '@/type'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      dataList: []
    }
  },
  beforeMount () {
    this.$store.commit(HIDE_TABBAR, false)
  },
  mounted () {
    Indicator.open()
    getCity().then(res => {
      // console.log(res.data.data.cities)
      this.dataList = this.getCityList(res.data.data.cities)
      Indicator.close()
    })
  },
  beforeDestroy () {
    this.$store.commit(SHOW_TABBAR, true)
  },
  methods: {
    getCityList (data) {
      const letterArr = []
      const newList = []
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)
      for (let j = 0; j < letterArr.length; j++) {
        const arr = data.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
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
    handleClick (id) {
      // console.log(id)
      localStorage.setItem('cityId', id)
      this.$router.push('/film')
      this.$router.go(0)
    }

  }
}
</script>

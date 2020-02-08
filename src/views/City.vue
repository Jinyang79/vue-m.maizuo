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
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      dataList: []
    }
  },
  computed: {
    ...mapState({
      cityList: state => state.city.cityList
    })
  },
  beforeMount () {
    this.$store.commit('city/hideTabbar', false)
  },
  mounted () {
    // this.dataList = this.getCityList(res.data.data.cities)
    this.getCityList()
    this.dataList = this.getCityListFilter(this.cityList)
  },
  beforeDestroy () {
    this.$store.commit('city/showTabbar', true)
  },
  methods: {
    ...mapActions({
      getCityList: 'city/getCityList'
    }),
    getCityListFilter (data) {
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
      console.log(id)
      localStorage.setItem('cityId', id)
      // this.$router.push('/film')
      this.$router.go(-1)
    }

  }
}
</script>

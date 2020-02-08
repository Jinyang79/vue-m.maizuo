<template>
  <mt-index-list>
    <mt-index-section :index="data.index"
                      v-for="data in cityList"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      cityList: 'city/cityListGetter'
    })
  },
  beforeMount () {
    this.$store.commit('city/hideTabbar', false)
  },
  mounted () {
    // this.dataList = this.getCityList(res.data.data.cities)
    this.getCityList()
  },
  beforeDestroy () {
    this.$store.commit('city/showTabbar', true)
  },
  methods: {
    ...mapActions({
      getCityList: 'city/getCityList'
    }),
    handleClick (id) {
      console.log(id)
      localStorage.setItem('cityId', id)
      // this.$router.push('/film')
      this.$router.go(-1)
    }

  }
}
</script>

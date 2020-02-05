<template>
  <div>
    <li v-for="data in dataList"
        :key="data.cinemaId">
      {{data.name}}
      <p style="font-size:12px;">{{data.address}}</p>
    </li>
  </div>
</template>
<script>
import { getCinema } from '@/network/cinema/cinema'
export default {
  name: 'Cinema',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    const id = localStorage.getItem('cityId')
    getCinema(id).then(res => {
      console.log(res)
      this.dataList = res.data.data.cinemas
    })
  }
}
</script>
<style lang="scss" scoped>
div {
  padding-bottom: 50px;
}
li {
  height: 80px;
}
</style>

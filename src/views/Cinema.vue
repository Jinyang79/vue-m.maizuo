<template>
  <div>
    <li v-for="data in dataList"
        :key="data.cinemaId">
      {{data.name}}
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
    getCinema().then(res => {
      console.log(res)
      this.dataList = res.data.data.cinemas
    })
  }
}
</script>
<style lang="scss" scoped>
li {
  height: 50px;
}
</style>

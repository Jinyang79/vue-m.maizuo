<template>
  <mt-swipe :auto="4000"
            v-if="dataList"
            id="mint-swipe">
    <mt-swipe-item v-for="data in dataList"
                   :key="data.bannerId"><img class="swipe-img"
           :src="data.imgUrl"></mt-swipe-item>
  </mt-swipe>
</template>
<script>
import { getHeaderSwiper } from '@/api/film/headerswiper'
export default {
  name: 'HeaderSwiper',
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    const id = localStorage.getItem('cityId')
    getHeaderSwiper(id).then(res => {
      console.log(res.data.data)
      this.dataList = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
#mint-swipe {
  height: 200px;
  .mint-swipe-indicator {
    left: auto !important;
    right: 12px !important;
    line-height: 5px;
    transform: translateX(0) !important;
    -webkit-transform: translateX(0) !important;
  }
  .swipe-img {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <router-link to="/city"
                 tag="li"
                 class="city-fixed"
                 v-if="dataList">
      <span>{{ cityName  && cityName.name }}</span>
      <i class="iconfont iconarrow-down"></i>
    </router-link>
    <mt-swipe :auto="4000"
              v-if="dataList"
              id="mint-swipe">
      <mt-swipe-item v-for="data in dataList"
                     :key="data.bannerId"><img class="swipe-img"
             :src="data.imgUrl"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { getHeaderSwiper } from '@/api/film/headerswiper'
import { mapGetters } from 'vuex'
export default {
  name: 'HeaderSwiper',
  data () {
    return {
      dataList: []
    }
  },
  computed: {
    ...mapGetters({
      'cityName': 'city/cityName'
    })
  },
  activated () {
    const id = localStorage.getItem('cityId')
    getHeaderSwiper(id).then(res => {
      console.log(res.data.data)
      this.dataList = res.data.data
    })
  }
}
</script>
<style lang="scss" >
#mint-swipe {
  height: 200px;
  .mint-swipe-indicators {
    left: auto !important;
    right: 12px !important;
    line-height: 5px;
    transform: translateX(0) !important;
    -webkit-transform: translateX(0) !important;
    .mint-swipe-indicator {
      width: 5px !important;
      height: 5px !important;
    }
    .mint-swipe-indicator.is-active {
      opacity: 1 !important;
      background: #fff !important;
    }
  }
  .swipe-img {
    height: 100%;
    width: 100%;
    margin: 6px auto;
  }
}
.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
</style>

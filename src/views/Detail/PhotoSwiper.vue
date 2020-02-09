<template>
  <swiper :options="swiperOption"
          ref="mySwiper">
    <swiper-slide v-for="(data,i) in photo"
                  :key="i">
      <img :src="data">
    </swiper-slide>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'PhotoSwiper',
  props: ['photo'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        slidesPerView: 2.3,
        spaceBetween: 20,
        freeMode: true

      }
    }
  }
}

</script>
<style lang="scss" scoped>
* {
  height: 115px;
  margin-bottom: 60px;
  background-color: #fff;
}
img {
  width: 150px;
  height: 100px;
}
</style>

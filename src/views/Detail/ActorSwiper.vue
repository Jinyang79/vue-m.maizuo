<template>
  <swiper :options="swiperOption"
          ref="mySwiper">
    <swiper-slide v-for="(data,i) in actors"
                  :key="i">
      <img :src="data.avatarAddress">
      <p>{{data.name}}</p>
    </swiper-slide>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'ActorSwiper',
  props: ['actors'],
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
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: true
      }
    }
  }
}

</script>
<style lang="scss" scoped>
img {
  width: 85px;
}
</style>

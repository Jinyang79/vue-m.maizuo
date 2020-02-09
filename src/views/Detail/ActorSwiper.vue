<template>
  <swiper :options="swiperOption"
          ref="mySwiper">
    <swiper-slide v-for="(data,i) in actors"
                  :key="i">
      <img :src="data.avatarAddress">
      <span class="actors_name">{{data.name}}</span>
      <span class="role_name">{{ data.role }}</span>
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
        spaceBetween: 20,
        freeMode: true
      }
    }
  }
}

</script>
<style lang="scss" scoped>
img {
  width: 85px;
  height: 110px;
}
.actors_name {
  text-align: center;
  padding-top: 10px;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.role_name {
  display: block;
  text-align: center;
  font-size: 10px;
  width: 85px;
  color: #797d82;
}
</style>

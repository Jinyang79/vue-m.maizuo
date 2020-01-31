<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster"
         class="poster">
    {{filminfo.name}}
    演职人员
    <swiper>
      <swiper-slide v-for="data in filminfo.actors"
                    :key="data.name">
        <img :src="data.avatarAddress">
        <p>{{data.name}}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['id'],
  mounted () {
    console.log(this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=5991020`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1580019433369367191204","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  data () {
    return {
      filminfo: null
    }
  }
}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
}
</style>

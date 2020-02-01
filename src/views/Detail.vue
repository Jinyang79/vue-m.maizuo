<template>
  <div v-if="filminfo">
    <img :src="filminfo.poster"
         class="poster">
    <h1>{{filminfo.name}}</h1>
    <h3>演职人员</h3>
    <actor-swiper :actors='filminfo.actors'></actor-swiper>
    <h3>剧照</h3>
    <photo-swiper :photo='filminfo.photos'></photo-swiper>
  </div>
</template>
<script>
import { getDetail } from '@/network/detail'
import ActorSwiper from './Detail/ActorSwiper'
import PhotoSwiper from './Detail/PhotoSwiper'
export default {
  name: 'Detail',
  components: {
    ActorSwiper,
    PhotoSwiper
  },
  props: ['id'],
  data () {
    return {
      filminfo: null
    }
  },
  mounted () {
    console.log(this.id)
    getDetail(this.id).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  }

}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
}
</style>

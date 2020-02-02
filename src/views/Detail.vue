<template>
  <div v-if="filmInfo">
    <img :src="filmInfo.poster"
         class="poster">
    <h1>{{filmInfo.name}}</h1>
    <h3>演职人员</h3>
    <actor-swiper :actors='filmInfo.actors'></actor-swiper>
    <h3>剧照</h3>
    <photo-swiper :photo='filmInfo.photos'></photo-swiper>
  </div>
</template>
<script>
import { getDetail } from '@/network/film/detail'
import ActorSwiper from './Detail/ActorSwiper'
import PhotoSwiper from './Detail/PhotoSwiper'
// import eventBus from '@/eventbus'
export default {
  name: 'Detail',
  components: {
    ActorSwiper,
    PhotoSwiper
  },
  props: ['id'],
  data () {
    return {
      filmInfo: null
    }
  },
  beforeMount () {
    //   console.log('触发事件')
    //   eventBus.$emit('maizuo', false)
    this.$store.commit('hideTabbar', false)
  },
  mounted () {
    console.log(this.id)
    getDetail(this.id).then(res => {
      console.log(res.data)
      this.filmInfo = res.data.data.film
    })
  },
  beforeDestroy () {
    //   console.log('销毁事件')
    //   eventBus.$emit('maizuo', true)
    this.$store.commit('showTabbar', true)
  }

}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
}
</style>

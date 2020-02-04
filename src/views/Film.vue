<template>
  <div>
    <header-swiper></header-swiper>
    <film-header></film-header>
    <router-view />
  </div>
</template>

<script>
import FilmHeader from '@/views/Film/FilmHeader'
import HeaderSwiper from '@/views/Film/HeaderSwiper'
export default {
  name: 'Film',
  components: {
    FilmHeader,
    HeaderSwiper
  }
}
</script>

<style lang="scss" scoped>
</style>

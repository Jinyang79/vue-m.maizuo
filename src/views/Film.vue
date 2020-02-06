<template>
  <div>
    <header-swiper ref="myswiper"></header-swiper>
    <film-header :class="isFixed ? 'fixed' : ''"></film-header>
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
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.onscroll = this.hanleScroll
  },
  beforeDestroy () {
    window.onscroll = ''
  },
  methods: {
    hanleScroll () {
      if (document.documentElement.scrollTop >= 200) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: #fff;
}
</style>

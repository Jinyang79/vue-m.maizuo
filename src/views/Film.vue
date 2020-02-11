<template>
  <div>
    <header-swiper ref="myswiper"></header-swiper>
    <film-nav-bar v-if="isFixed"></film-nav-bar>
    <film-header :class="isFixed ? 'fixed' : ''"></film-header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import FilmHeader from './Film/FilmHeader'
import HeaderSwiper from './Film/HeaderSwiper'
import FilmNavBar from './Film/FilmNavBar'
export default {
  name: 'Film',
  components: {
    FilmHeader,
    HeaderSwiper,
    FilmNavBar
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
  top: 44px;
  width: 100%;
  height: 49px;
  background-color: #fff;
}
</style>

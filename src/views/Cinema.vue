<template>
  <div>
    <cinema-nav-bar></cinema-nav-bar>
    <cinema-list></cinema-list>
  </div>
</template>

<script>
import CinemaList from './Cinema/CinemaList'
import CinemaNavBar from './Cinema/CinemaNavBar'
export default {
  name: 'Cinema',
  components: {
    CinemaList,
    CinemaNavBar
  }
}
</script>

<style lang="scss" scoped>
</style>

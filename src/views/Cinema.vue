<template>
  <div>
    <nav-bar></nav-bar>
    <cinema-list></cinema-list>
  </div>
</template>

<script>
import CinemaList from './Cinema/CinemaList'
import NavBar from './Cinema/NavBar'
export default {
  name: 'Cinema',
  components: {
    CinemaList,
    NavBar
  }
}
</script>

<style lang="scss" scoped>
</style>

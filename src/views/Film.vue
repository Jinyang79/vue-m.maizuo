<template>
  <div>
    <film-header></film-header>
    <router-view />
  </div>
</template>

<script>
import FilmHeader from '@/views/Film/FilmHeader'
export default {
  name: 'Film',
  components: {
    FilmHeader
  }
}
</script>

<style lang="scss" scoped>
</style>

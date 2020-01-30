<template>
  <div>
    <filmheader></filmheader>
    <router-view />
  </div>
</template>

<script>
import filmheader from '@/views/Film/FilmHeader'
export default {
  components: {
    filmheader
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div>
    <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/TabBar'
export default {
  components: { tabbar }
}
</script>
<style lang="scss" >
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}
li {
  list-style: none;
}
</style>

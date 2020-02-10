<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <tabbar v-show="isTabbarShow"></tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/TabBar'
import { mapState } from 'vuex'
// import eventBus from '@/eventbus'
export default {
  name: 'App',
  components: { Tabbar },
  data () {
    return {
      // isShow: true
    }
  },
  computed: {
    ...mapState({
      isTabbarShow: state => state.city.isTabbarShow
    })
  }
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

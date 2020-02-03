<template>
  <div>
    <router-view />
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
    ...mapState(['isTabbarShow'])
  }
  // beforeMount () {
  //   console.log('监听事件')
  //   eventBus.$on('maizuo', (data) => {
  //     this.isShow = data
  //   })
  // }
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

<template>
  <div>
    <router-view />
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
  </div>
</template>
<script>
import Tabbar from '@/components/TabBar'
// import eventBus from '@/eventbus'
export default {
  name: 'App',
  components: { Tabbar },
  data () {
    return {
      // isShow: true
    }
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

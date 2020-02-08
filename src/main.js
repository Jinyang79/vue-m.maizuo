import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入过滤器
import { dateFilter } from './filter/datefilter'
import { actorFilter } from './filter/actorfilter'
Vue.use(MintUI)
Vue.config.productionTip = false
// 注册为全局过滤器
Vue.filter('dateFilter', dateFilter)
Vue.filter('actorFilter', actorFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

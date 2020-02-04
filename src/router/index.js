import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Detail from '@/views/Detail'
import City from '@/views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/film'
  },
  {
    path: '/film',
    component: Film,
    children: [
      {
        path: 'nowplaying',
        component: Nowplaying
      },
      {
        path: 'comingsoon',
        component: Comingsoon
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '/city',
    component: City
  }

]

const router = new VueRouter({
  routes
})

export default router

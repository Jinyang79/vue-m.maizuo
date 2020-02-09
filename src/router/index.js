import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/film'
  },
  {
    path: '/film',
    component: () => import('@/views/Film'),
    children: [
      {
        path: 'nowplaying',
        component: () => import('@/views/Film/Nowplaying')
      },
      {
        path: 'comingsoon',
        component: () => import('@/views/Film/Comingsoon')
      },
      {
        path: '',
        redirect: 'nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('@/views/Cinema')
  },
  {
    path: '/center',
    component: () => import('@/views/Center')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/Detail'),
    props: true
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/City')
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  }

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/film/nowplaying' && !localStorage.getItem('cityId')) {
    next('/city')
  } else {
    next()
  }
})

export default router

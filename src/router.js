import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: 'AppDefaultLayout'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: {
      layout: 'AppDefaultLayout'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/User.vue'),
    meta: {
      layout: 'AppDefaultLayout'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue'),
    meta: {
      layout: 'AppDefaultLayout'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import ProductDetail from '../views/productDetail.vue'
import List from '../views/list.vue'
import Search from '../views/search.vue'
import Profile from '../views/profile.vue'
// import Login from '../components/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
    // component: () => import('../views/About.vue')
  },
  {
    path: '/productDetail',
    name: 'productDetail',
    component: ProductDetail,
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  {
    path: '/list',
    name: 'list',
    component: List
    // component: () => import('../views/About.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: Search
    // component: () => import('../views/About.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
    // component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

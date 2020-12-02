import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import ProductDetail from '../views/product/productDetail.vue'
import productDetail_account from '../views/product/productDetail_account.vue'
import productDetail_completion from '../views/product/productDetail_completion.vue'
import productDetail_cert from '../views/product/productDetail_cert.vue'
import List from '../views/footer/list.vue'
import Search from '../views/footer/search.vue'
import Profile from '../views/footer/profile.vue'
import Alram from '../views/alram.vue'


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
  },
  {
    path: '/productdetail_account',
    name: 'productDetail_account',
    component: productDetail_account,
  },
  {
    path: '/productdetail_completion',
    name: 'productDetail_completion',
    component: productDetail_completion,
  },
  {
    path: '/productdetail_cert',
    name: 'productDetail_cert',
    component: productDetail_cert,
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
  },
  {
    path: '/alram',
    name: 'alram',
    component: Alram
    // component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
  
})

export default router

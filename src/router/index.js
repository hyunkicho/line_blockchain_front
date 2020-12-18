import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import ProductDetail from '../views/product/productDetail.vue'
import productDetail_account from '../views/product/productDetail_account.vue'
import productDetail_completion from '../views/product/productDetail_completion.vue'
import productDetail_cert from '../views/product/productDetail_cert.vue'
import Inspect_step1 from '../views/mypage/inspect_step1.vue'
import Inspect_step2 from '../views/mypage/inspect_step2.vue'
import Inspect_step3 from '../views/mypage/inspect_step3.vue'
import Inspect_sucess from '../views/mypage/inspect_sucess.vue'
import Inspected from '../views/mypage/inspected.vue'
import List from '../views/footer/list.vue'
import Search from '../views/footer/search.vue'
import Mypage from '../views/footer/mypage.vue'
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

  /* mypage child */
  {
    path: '/inspect_step1',
    name: 'inspect_step1',
    component: Inspect_step1
  },
  {
    path: '/inspect_step2',
    name: 'inspect_step2',
    component: Inspect_step2
  },
  {
    path: '/inspect_step3',
    name: 'inspect_step3',
    component: Inspect_step3
  },
  {
    path: '/inspect_sucess',
    name: 'inspect_sucess',
    component: Inspect_sucess
  },
  {
    path: '/inspected',
    name: 'inspected',
    component: Inspected
  },

  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: Mypage
  },
  {
    path: '/alram',
    name: 'alram',
    component: Alram
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/index.vue'
import Home from '../views/Main/Home/Home.vue'
import Product from '../views/Main/Product/Product.vue'
import History from '../views/Main/History/History.vue'
import Menu from '../views/Menu/Menu.vue'
import Landp from '../views/Menu/LandP/LandP.vue'
import Register from '../views/Menu/User/Register/User.vue'
import Login from '../views/Menu/User/Login/Login.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/menu',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta: { requiresAuth: true }
      },
      {
        path: 'product',
        name: 'product',
        component: Product,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu,
    redirect: '/landp',
    children: [
      {
        path: '/landp',
        name: 'landp',
        component: Landp,
        meta: { requiresVisitor: true }
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { requiresVisitor: true }
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { requiresVisitor: true }
      }
    ]
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/home'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router

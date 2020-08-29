import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/index.vue'
import Home from '../views/Main/Home/Home.vue'
import History from '../views/Main/History/History.vue'
import Product from '../views/Main/Product/Product.vue'
import Register from '../views/Main/User/Register/User.vue'
import RegisterAdmin from '../views/Main/User/Register/Admin.vue'
import Login from '../views/Main/User/Login/Login.vue'
import LandingPage from '../views/LandingPage/Landing.vue'

import store from '../store/index'
// import Login from '../views/auth/login/Login.vue'
// import Register from '../views/auth/register/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    redirect: '/landingpage',
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
    path: '/history',
    name: 'history',
    component: History,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/registerAdmin',
    name: 'registerAdmin',
    component: RegisterAdmin,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/landingpage',
    name: 'landingpage',
    component: LandingPage
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

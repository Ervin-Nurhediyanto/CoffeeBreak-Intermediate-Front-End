import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false

Vue.directive('filter', {
  bind (el, binding) {
    el.style.filter = `brightness(${binding.value}%)`
  }
})

Vue.directive('position', {
  bind (el, binding) {
    el.style.position = binding.value
  }
})

Vue.directive('top', {
  bind (el, binding) {
    el.style.top = `${binding.value}px`
  }
})

Vue.directive('bottom', {
  bind (el, binding) {
    el.style.bottom = `${binding.value}px`
  }
})

Vue.directive('right', {
  bind (el, binding) {
    el.style.right = `${binding.value}px`
  }
})

Vue.directive('left', {
  bind (el, binding) {
    el.style.left = `${binding.value}px`
  }
})

const options = {
  confirmButtonColor: '#d31d0d',
  cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive('filter', {
  bind (el, binding) {
    el.style.filter = `brightness(${binding.value}%)`
  }
})

// Vue.directive('position', {
//   bind (el, binding) {
//     el.style.position = binding.value
//   }
// })

// Vue.directive('top', {
//   bind (el, binding) {
//     el.style.top = `${binding.value}px`
//   }
// })

// Vue.directive('bottom', {
//   bind (el, binding) {
//     el.style.bottom = `${binding.value}px`
//   }
// })

// Vue.directive('right', {
//   bind (el, binding) {
//     el.style.right = `${binding.value}px`
//   }
// })

// Vue.directive('left', {
//   bind (el, binding) {
//     el.style.left = `${binding.value}px`
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

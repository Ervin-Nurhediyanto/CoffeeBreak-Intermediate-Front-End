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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

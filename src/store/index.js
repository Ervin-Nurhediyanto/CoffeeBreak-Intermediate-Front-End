import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user/user'
import Product from './modules/product/product'
import History from './modules/history/history'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    User,
    Product,
    History
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    allProduct: [],
    products: [],
    totalPage: '',
    status: '',
    page: '',
    empty: true,
    cartCount: 0,
    productList: [],
    totalPrice: 0
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setAllProduct (state, payload) {
      state.allproduct = payload
    },
    setProduct (state, payload) {
      state.products = payload
    },
    setTotalPage (state, payload) {
      state.totalPage = payload
    },
    setPage (state, payload) {
      state.page = payload
    },
    nextPage (state) {
      state.page++
    },
    prevPage (state) {
      state.page--
    },
    setFalseEmpty (state) {
      state.empty = false
    },
    setTrueEmpty (state) {
      state.empty = true
    },
    setCardSelect (state, payload) {
      state.cardSelect = payload
    },
    setCardActive (state, payload) {
      state.cardActive = payload
    },
    setCartCountPlus (state) {
      state.cartCount++
    },
    setCartCountMin (state) {
      state.cartCount--
    },
    setCartCountNull (state) {
      state.cartCount = 0
    },
    setpayloadUpdate (state, payload) {
      state.payloadUpdate = payload
    },
    setProductList (state, payload) {
      state.productList.push(payload)
    },
    removeProductList (state, index) {
      // const index = state.productList.name.indexOf(payload.name)
      if (index > -1) {
        state.productList.splice(index, 1)
      }
    },
    setProductListClear (state) {
      state.productList = []
    },
    setPlusCountList (state, id) {
      state.productList[id].countItem++
    },
    setTotalPrice (state, payload) {
      state.totalPrice += payload
    },
    setTotalPriceNull (state) {
      state.totalPrice = 0
    },
    setToken (state, payload) {
      state.token = payload
    }
  },
  actions: {
    getAllData (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_PRODUCT)
          .then((res) => {
            setex.commit('setAllProduct', res.data.result)
            setex.commit('setTotalPage', Math.ceil(res.data.result.length / 6))
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getData (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1')
          .then((res) => {
            setex.commit('setProduct', res.data.result)
            setex.commit('setPage', res.data.page)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    nextPage (setex) {
      return new Promise((resolve, reject) => {
        setex.commit('nextPage')
        axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page)
          .then((res) => {
            setex.commit('setProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    prevPage (setex) {
      return new Promise((resolve, reject) => {
        setex.commit('prevPage')
        axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page)
          .then((res) => {
            setex.commit('setProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        router.push('/login')
        alert(error.response.data.result.message)
        return Promise.reject(error)
      })
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${setex.state.token}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    login (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_LOGIN, payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            console.log('token:' + this.state.token)
            localStorage.setItem('token', this.state.token)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
        }
      })
    },
    updateData (setex, payload) {
      console.log('payload update: ' + payload)
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_URL_PRODUCT + '/' + payload.id, payload.formData, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    deleteData (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_URL_PRODUCT + '/' + payload.id, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      })
    },
    register (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_REG_USER, payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    registerAdmin (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_REG_ADMIN, payload)
          .then((res) => {
            console.log(res)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    plusCount (setex, payload) {
      setex.commit('setCartCountPlus')
      if (this.state.cartCount > 0) {
        setex.commit('setFalseEmpty')
      }
    },
    minusCount (setex, payload) {
      setex.commit('setCartCountMin')
      if (this.state.cartCount <= 0) {
        setex.commit('setTrueEmpty')
      }
    },
    addListProduct (setex, paylaod) {
      setex.commit('setProductList', paylaod)
    },
    removeListProduct (setex, paylaod) {
      // const indexA = productList.map((item) => {
      //   return item.id
      // }).indexOf(2)
      const index = this.state.productList.map((item) => {
        return item.id
      }).indexOf(paylaod.id)

      console.log('index: ' + index)
      setex.commit('removeProductList', index)
    },
    cancelCart (setex) {
      setex.commit('setProductListClear')
      setex.commit('setCartCountNull')
      setex.commit('setTotalPriceNull')
      setex.commit('setTrueEmpty')
    },
    addTotalPrice (setex, payload) {
      setex.commit('setTotalPrice', payload)
    },
    plusCountItem (setex, id) {
      const index = this.state.productList.map((item) => {
        return item.id
      }).indexOf(id)

      console.log(index)
      setex.commit('setPlusCountList', id)
      // const index = this.state.productList.map((item) => {
      //   return item.id.indexOf(id)
      // })
      // console.log('index: ' + index)
    }
  },
  getters: {
    allProduct (state) {
      return state.allProduct
    },
    products (state) {
      return state.products
    },
    totalPage (state) {
      return state.totalPage
    },
    page (state) {
      return state.page
    },
    empty (state) {
      return state.empty
    },
    cardSelect (state) {
      return state.cardSelect
    },
    cardActive (state) {
      return state.cardActive
    },
    cartCount (state) {
      return state.cartCount
    },
    isLogin (state) {
      return state.token !== null
    },
    productList (state) {
      return state.productList
    },
    totalPrice (state) {
      return state.totalPrice
    }
    // getCount (state) {
    //   return state.count * 2
    // },
    // getTodos (state) {
    //   return state.todos
    // },
    // books (state) {
    //   console.log(state.books)
    //   return state.books
    // }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import localStorage from 'localStorage'

Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
  state: {
    // user: {},
    token: window.localStorage.getItem('token') || null,
    allProduct: [],
    products: [],
    totalPage: '',
    status: '',
    page: '',
    empty: true,
    cardSelect: false,
    cardActive: true,
    cartCount: 0
  },
  mutations: {
    // setUser (state, payload) {
    //   state.user = payload
    //   state.token = payload.token
    // },
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
    setEmpty (state, payload) {
      state.empty = payload
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
    addToCart (setex) {
    //   return new Promise((resolve, reject) => {
      if (this.state.cardSelect === false) {
        setex.commit('setCartCountPlus')
        setex.commit('setEmpty', false)
        //   name: this.name,
        //   image: this.image,
        //   price: this.price,
        //   id: this.id,
        //   quality: 1,
        //   plus: this.price
      } else {
        setex.commit('setCartCountMin')
        setex.commit('setEmpty', true)
        //   name: this.name,
        //   image: this.image,
        //   price: this.price,
        //   id: this.id
        // selectItem: this.selectItem
      }

      if (this.state.cardSelect === true) {
        this.state.cardSelect = false
      } else {
        this.state.cardSelect = true
      }

      if (this.state.cardActive === true) {
        this.state.cardActive = false
      } else {
        this.state.cardActive = true
      }
    //   })
    }
    // interceptorsResponse () {
    //   axios.interceptors.response.use(function (response) {
    //     return response
    //   }, function (error) {
    //     console.log(error)
    //     return Promise.reject(error)
    //   })
    // },
    // interceptorsRequest (setex) {
    //   console.log('interse')
    //   axios.interceptors.request.use(function (config) {
    //     config.headers.Authorization = `Bearer ${setex.state.token}`
    //     return config
    //   }, function (error) {
    //     return Promise.reject(error)
    //   })
    // },
    // login (setex, payload) {
    //   console.log(payload)
    //   return new Promise((resolve, reject) => {
    //     axios.post('http://localhost:4017/api/v1/users/login', payload)
    //       .then((res) => {
    //         console.log(res)
    //         setex.commit('setUser', res.data.result)
    //         axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
    //         resolve(res.data.result[0])
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //         reject(err)
    //       })
    //   })
    // },
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
    }

    // getCount (state) {
    //   return state.count * 2
    // },
    // getTodos (state) {
    //   return state.todos
    // },
    // isLogin (state) {
    //   return state.token !== null
    // },
    // books (state) {
    //   console.log(state.books)
    //   return state.books
    // }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`

export default new Vuex.Store({
  state: {
    user: {},
    histories: [],
    historiesIncome: [],
    historiesMonth: [],
    allProduct: [],
    products: [],
    productList: [],
    totalPrice: 0,
    totalPage: '',
    page: null,
    status: '',
    empty: true,
    cartCount: 0,
    token: localStorage.getItem('token') || null,
    search: localStorage.getItem('search') || null,
    sort: localStorage.getItem('sort') || null,
    message: localStorage.getItem('message') || 'Loading'
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setHistory (state, payload) {
      state.histories = payload
    },
    setHistoryIncome (state, payload) {
      state.historiesIncome = payload
    },
    sethistoriesMonth (state, payload) {
      state.historiesMonth = payload
    },
    setAllProduct (state, payload) {
      state.allProduct = payload
    },
    setProduct (state, payload) {
      state.products = payload

      const changeProduct = state.products.map((item) => {
        const resProduct = Object.assign({}, item, { cardSelect: false }, { cardActive: true })
        return resProduct
      })

      state.products = changeProduct
    },
    setProductNonAct (state, id) {
      state.products.map((item) => {
        if (item.id === id) {
          // if (item.cardSelect === true) {
          item.cardSelect = false
          item.cardActive = true
          // }
        }
      })
    },
    setTotalPage (state, payload) {
      state.totalPage = payload
    },
    setPage (state, payload) {
      state.page = Number(payload)
    },
    nextPage (state, payload) {
      state.page += payload
    },
    prevPage (state, payload) {
      state.page -= payload
    },
    setSearch (state, payload) {
      state.search = payload
    },
    setSort (state, payload) {
      state.sort = payload
    },
    setUrlImage (state, payload) {
      state.allImage.push(payload)
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
      if (index > -1) {
        state.productList.splice(index, 1)
      }
    },
    setProductListClear (state) {
      state.productList = []
      state.products.map((item) => {
        if (item.cardSelect === true) {
          item.cardSelect = false
          item.cardActive = true
        }
      })
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
    },
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    getHistory (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_HISTORY + '/?sort=date&order=DESC')
          .then((res) => {
            // console.log('history:' + res.data.result)
            setex.commit('setHistory', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getHistoryIncome (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_HISTORY + '/?sort=date&order=DESC&group=history.date')
          .then((res) => {
            // console.log('history income:' + res.data.result)
            setex.commit('setHistoryIncome', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getHistoryMonth (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_HISTORY + '/?sort=date&order=DESC&group=month')
          .then((res) => {
            console.log('thisM: ' + res.data.result)
            setex.commit('sethistoriesMonth', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log('thisM: ' + err)
            reject(err)
          })
      })
    },
    getAllData (setex) {
      return new Promise((resolve, reject) => {
        if (this.state.search != null) {
          if (this.state.sort != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?search=' + this.state.search + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setAllProduct', res.data.result)
                setex.commit('setTotalPage', Math.ceil(res.data.result.length / 6))
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?search=' + this.state.search)
              .then((res) => {
                setex.commit('setAllProduct', res.data.result)
                setex.commit('setTotalPage', Math.ceil(res.data.result.length / 6))
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else {
          axios.get(process.env.VUE_APP_URL_PRODUCT)
            .then((res) => {
              console.log('all data: ' + res.data.result)
              setex.commit('setAllProduct', res.data.result)
              setex.commit('setTotalPage', Math.ceil(res.data.result.length / 6))
              resolve(res.data.result)
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
        }
      })
    },
    getData (setex) {
      return new Promise((resolve, reject) => {
        if (this.state.search != null) {
          if (this.state.sort != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&search=' + this.state.search + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                setex.commit('setPage', res.data.page)
                // localStorage.setItem('search', payload)
                const dataImg = res.data.result.map((item) => {
                  return item.image
                })
                setex.commit('setUrlImage', dataImg)
                localStorage.setItem('image', this.state.allImage)

                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                setex.commit('setPage', res.data.page)

                const dataImg = res.data.result.map((item) => {
                  return item.image
                })
                setex.commit('setUrlImage', dataImg)
                localStorage.setItem('image', this.state.allImage)

                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else if (this.state.sort != null) {
          if (this.state.search != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&sort=' + this.state.sort + '&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                setex.commit('setPage', res.data.page)

                const dataImg = res.data.result.map((item) => {
                  return item.image
                })
                setex.commit('setUrlImage', dataImg)
                localStorage.setItem('image', this.state.allImage)

                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                setex.commit('setPage', res.data.page)

                const dataImg = res.data.result.map((item) => {
                  return item.image
                })
                setex.commit('setUrlImage', dataImg)
                localStorage.setItem('image', this.state.allImage)

                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else {
          axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1')
            .then((res) => {
              setex.commit('setProduct', res.data.result)
              setex.commit('setPage', res.data.page)

              const dataImg = res.data.result.map((item) => {
                return item.image
              })
              setex.commit('setUrlImage', dataImg)
              localStorage.setItem('image', this.state.allImage)

              resolve(res.data.result)
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
        }
      })
    },
    getDataSearch (setex, payload) {
      return new Promise((resolve, reject) => {
        localStorage.setItem('search', payload)
        this.getData()
      })
    },
    getDataSort (setex, payload) {
      return new Promise((resolve, reject) => {
        localStorage.setItem('sort', payload)
        this.getData()
      })
    },
    nextPage (setex, payload) {
      return new Promise((resolve, reject) => {
        setex.commit('nextPage', payload)
        if (this.state.search != null) {
          if (this.state.sort != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page + '&search=' + this.state.search + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                // setex.commit('setPage', res.data.page)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page + '&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                // setex.commit('setPage', res.data.page)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else if (this.state.sort != null) {
          if (this.state.search != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page + '&sort=' + this.state.sort + '&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                // setex.commit('setPage', res.data.page)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                // setex.commit('setPage', res.data.page)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else {
          axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + this.state.page)
            .then((res) => {
              setex.commit('setProduct', res.data.result)
              resolve(res.data.result)
            })
            .catch((err) => {
              console.log(err)
              reject(err)
            })
        }
      })
    },
    prevPage (setex, payload) {
      return new Promise((resolve, reject) => {
        setex.commit('prevPage', payload)
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
      return new Promise((resolve, reject) => {
        setex.commit('setMessage', 'loading')
        axios.post(process.env.VUE_APP_URL_LOGIN, payload)
          .then((res) => {
            setex.commit('setMessage', 'Success')
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', this.state.token)
            // axios.defaults.headers.common.Authorization = `Bearer ${res.data.result.token}`
            resolve(res.data.result[0])
          })
          .catch((err) => {
            setex.commit('setMessage', err.response.data.result)
            // localStorage.setItem('message', this.state.maessage)
            reject(err)
          })
      })
    },
    logout () {
      return new Promise((resolve, reject) => {
        if (this.state.token !== null) {
          localStorage.removeItem('token')
          localStorage.removeItem('search')
          localStorage.removeItem('sort')
          localStorage.removeItem('message')
          localStorage.removeItem('image')
        }
      })
    },
    updateData (setex, payload) {
      // if (payload.formData.image != null) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_URL_PRODUCT + '/' + payload.id, payload.formData, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
          .then((res) => {
            // console.log('update res:' + res.data.result)
            setex.commit('setMessage', res.data.result)
            localStorage.setItem('message', this.state.maessage)
          })
          .catch((err) => {
            // console.log('update err:' + err)
            console.log(err.response.data.result)
            setex.commit('setMessage', err.data.result.message)
            localStorage.setItem('message', this.state.maessage)
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
            // console.log(res)
            setex.commit('setMessage', res.data.result)
            localStorage.setItem('message', this.state.maessage)
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
      const index = this.state.productList.map((item) => {
        return item.id
      }).indexOf(paylaod.id)

      // console.log('index: ' + index)
      setex.commit('removeProductList', index)
    },
    removeProduct (setex, id) {
      setex.commit('setProductNonAct', id)
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
    }
  },

  getters: {
    histories (state) {
      return state.histories
    },
    historiesIncome (state) {
      return state.historiesIncome
    },
    historiesMonth (state) {
      return state.historiesMonth
    },
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
    },
    search (state) {
      return state.search
    },
    sort (state) {
      return state.sort
    },
    urlImage (state) {
      return state.urlImage
    },
    message (state) {
      return state.message
    }
  },

  modules: {
  }
})

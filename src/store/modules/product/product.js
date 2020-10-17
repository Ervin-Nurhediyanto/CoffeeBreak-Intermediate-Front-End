import axios from 'axios'

const product = {
  state: {
    allProduct: [],
    products: [],
    productList: [],
    totalPrice: 0,
    totalPage: '',
    page: null,
    empty: true,
    status: '',
    cartCount: 0,
    search: localStorage.getItem('search') || '',
    sort: localStorage.getItem('sort') || ''
  },
  mutations: {
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
          item.cardSelect = false
          item.cardActive = true
        }
      })
    },
    setTotalPage (state, payload) {
      state.totalPage = payload
    },
    setPage (state, payload) {
      state.page = Number(payload)
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
    }
  },
  actions: {
    getAllData (setex, payload) {
      return new Promise((resolve, reject) => {
        if (payload.search) {
          if (payload.sort) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?search=' + payload.search + '&sort=' + payload.sort)
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
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?search=' + payload.search)
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
    getData (setex, payload) {
      return new Promise((resolve, reject) => {
        if (payload.search) {
          if (payload.sort) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&search=' + payload.search + '&sort=' + payload.sort)
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
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&search=' + payload.search)
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
        } else if (payload.sort) {
          if (payload.search) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&sort=' + payload.sort + '&search=' + payload.search)
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
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=1&sort=' + payload.sort)
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
        setex.commit('setSearch', payload)
        localStorage.setItem('search', payload)
      })
    },
    getDataSort (setex, payload) {
      return new Promise((resolve, reject) => {
        localStorage.setItem('sort', payload)
        this.getData()
      })
    },
    changePage (setex, payload) {
      return new Promise((resolve, reject) => {
        setex.commit('setPage', payload)
        if (this.state.search != null) {
          if (this.state.sort != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + payload + '&search=' + this.state.search + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + payload + '&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else if (this.state.sort != null) {
          if (this.state.search != null) {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + payload + '&sort=' + this.state.sort + '&search=' + this.state.search)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          } else {
            axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + payload + '&sort=' + this.state.sort)
              .then((res) => {
                setex.commit('setProduct', res.data.result)
                resolve(res.data.result)
              })
              .catch((err) => {
                console.log(err)
                reject(err)
              })
          }
        } else {
          console.log(payload)
          axios.get(process.env.VUE_APP_URL_PRODUCT + '/?page=' + payload)
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
    addData (setex, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_PRODUCT, payload)
          .then((res) => {
            setex.commit('setMessage', res.data.result)
            localStorage.setItem('message', this.state.maessage)
          })
          .catch((err) => {
            console.log(err.response.data.result)
            setex.commit('setMessage', err.data.result.message)
            localStorage.setItem('message', this.state.maessage)
          })
      })
    },
    updateData (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(process.env.VUE_APP_URL_PRODUCT + '/' + payload.id, payload.formData, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
          .then((res) => {
            setex.commit('setMessage', res.data.result)
            localStorage.setItem('message', this.state.maessage)
          })
          .catch((err) => {
            console.log(err.response.data.result)
            setex.commit('setMessage', err.data.result.message)
            localStorage.setItem('message', this.state.maessage)
          })
      })
    },
    deleteData (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(process.env.VUE_APP_URL_PRODUCT + '/' + payload, {
          headers: {
            Authorization: `Bearer ${this.state.token}`
          }
        })
          .then((res) => {
            setex.commit('setMessage', res.data.result)
            localStorage.setItem('message', this.state.maessage)
          })
          .catch((err) => {
            console.log(err)
            setex.commit('setMessage', err.data.result.message)
            localStorage.setItem('message', this.state.maessage)
          })
      })
    },
    plusCount (setex) {
      setex.commit('setCartCountPlus')
      setex.commit('setFalseEmpty')
    },
    minusCount (setex, payload) {
      setex.commit('setCartCountMin')
    },
    addListProduct (setex, paylaod) {
      setex.commit('setProductList', paylaod)
    },
    removeListProduct (setex, paylaod) {
      setex.commit('removeProductList', paylaod)
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
    }
  }
}

export default product

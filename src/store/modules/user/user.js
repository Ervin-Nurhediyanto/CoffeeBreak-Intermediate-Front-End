import axios from 'axios'
import router from '../../../router/index'

const user = {
  state: {
    user: {},
    token: localStorage.getItem('token') || null,
    message: localStorage.getItem('message') || 'Loading'
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    setMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.data.result)
        localStorage.removeItem('token')
        setex.commit('setToken', null)
        // alert(error.response.data.result.message)
        router.push('/login')
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
        // setex.commit('setMessage', 'loading')
        axios.post(process.env.VUE_APP_URL_LOGIN, payload)
          .then((res) => {
            setex.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            resolve(res.data.result)
          })
          .catch((err) => {
            setex.commit('setMessage', err.response.data.result)
            reject(err)
          })
      })
    },
    register (setex, payload) {
      return new Promise((resolve, reject) => {
        axios.post(process.env.VUE_APP_URL_REG_USER, payload)
          .then((res) => {
            // setex.commit('setMessage', res.data.result)
            // localStorage.setItem('message', this.state.maessage)
            resolve(res.data.result[0])
          })
          .catch((err) => {
            // setex.commit('setMessage', err.response.data.result)
            // localStorage.setItem('message', this.state.maessage)
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
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    message (state) {
      return state.message
    }
  }
}

export default user

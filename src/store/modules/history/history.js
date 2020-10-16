import axios from 'axios'

const history = {
  state: {
    histories: [],
    historiesIncome: [],
    historiesMonth: []
  },
  mutations: {
    setHistory (state, payload) {
      state.histories = payload
    },
    setHistoryIncome (state, payload) {
      state.historiesIncome = payload
    },
    sethistoriesMonth (state, payload) {
      state.historiesMonth = payload
    }
  },
  actions: {
    getHistory (setex) {
      return new Promise((resolve, reject) => {
        axios.get(process.env.VUE_APP_URL_HISTORY + '/?sort=date&order=DESC')
          .then((res) => {
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
    }
  }
}

export default history

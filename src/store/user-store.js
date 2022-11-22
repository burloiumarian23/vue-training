import { login } from '@/api/api-client.js'

export default {
  state: {
    username: '',
    connected: false,
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    },
    setConnected (state, connected) {
      state.connected = connected
    },
  },
  actions: {
    logIn ({ commit, dispatch }, { username, password }) {
      login(username, password)
        .then(({ token }) => {
          if (!token) {
            dispatch('showMessage', {message: 'Invalid credentials', type: 'error'})
            return
          }
          // const token = data.token
          // const { token } = data
          localStorage.setItem('token', token)
        })
    }
  },
}
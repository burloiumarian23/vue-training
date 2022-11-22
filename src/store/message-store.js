export default {
  state: {
    message: undefined,
    type: 'info', // 'error', 'warning', 'success', 'info'
  },
  mutations: {
    setMessage (state, { message, type }) {
      state.message = message
      state.type = type || 'info'
    },
  },
  actions: {
    showMessage ({ commit }, { message, type }) {
      commit('setMessage', { message, type })
      setTimeout(() => commit('setMessage', { message: undefined, type: 'info' }), 3000)
    }
  }
}
import Vue from 'vue'
import Vuex from 'vuex'

import user from './user-store.js'
import message from './message-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    message,
  },
})

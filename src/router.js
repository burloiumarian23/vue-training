import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLogin from './views/AppLogin.vue'
import AppHome from './views/AppHome.vue'
import AppMovies from './views/AppMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AppHome,
    name: 'home',
  },
  {
    path: '/login',
    component: AppLogin,
    name: 'login',
  },
  {
    path: '/movies',
    component: AppMovies,
    name: 'movies'
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
})
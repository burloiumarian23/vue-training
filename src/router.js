import Vue from 'vue'
import VueRouter from 'vue-router'

import AppLogin from './views/AppLogin.vue'
import AppHome from './views/AppHome.vue'
import AppMovies from './views/AppMovies.vue'
import AppMoviesList from './views/AppMoviesList.vue'
import AppMovie from './views/AppMovie.vue'
import AppSignup from './views/AppSignup.vue'
import store from './store/index.js'

Vue.use(VueRouter)

/** @type {import('vue-router').RouteConfig[]} */
const routes = [
  {
    path: '/',
    component: AppHome,
    name: 'home',
    meta: {
      needsAuth: true,
    },
  },
  {
    path: '/login',
    component: AppLogin,
    name: 'login',
  },
  {
    path: '/movies',
    component: AppMovies,
    name: 'movies',
    children: [
      {
        path: '',
        component: AppMoviesList,
        name: 'movies-list',
      },
      {
        path: ':movieId',
        component: AppMovie,
        name: 'movie',
        props: (route) => {
          return {
            movieId: route.params.movieId,
          }
        },
      },
    ],
  },
  {
    path: '/signup',
    component: AppSignup,
    name: 'signup',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth && !store.state.user.connected) {
    next({ name: 'login' })
    return
  }
  next(true)
})

export default router

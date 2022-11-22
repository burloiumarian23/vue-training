<template>
  <div>
    <MainHeader :title="headerTitle" />
    <main>
      <router-link class="link" :to="{name: 'home'}">Home</router-link>
      <router-link class="link" :to="{name: 'login'}">Login</router-link>
      <router-link class="link" :to="{name: 'movies'}" v-if="connected">movies</router-link>
      <router-view />
    </main>
    <footer>Cool App.</footer>
    <AppMessages v-if="$store.state.message.message"/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import AppMessages from './components/AppMessages.vue'
import AppMovies from './views/AppMovies.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    AppMovies,
    AppMessages,
  },
  data () {
    return {
      headerTitle: 'Great header',
      connected: false,
    }
  },
}
</script>

<style>
.link {
  margin-inline: 0.5rem;
}
</style>
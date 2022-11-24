<template>
  <div>
    <MainHeader :title="headerTitle" />
    <main>
      <router-link
        class="link"
        :to="{name: 'home'}"
      >
        Home
      </router-link>
      <router-link
        class="link"
        :to="{name: 'login'}"
      >
        Login
      </router-link>
      <router-link
        class="link"
        :to="{name: 'signup'}"
      >
        Signup
      </router-link>
      <router-link
        v-if="connected"
        class="link"
        :to="{name: 'movies'}"
      >
        movies
      </router-link>
      <transition appear>
        <router-view />
      </transition>
    </main>
    <footer>Cool App.</footer>
    <AppMessages v-if="$store.state.message.message" />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import AppMessages from './components/AppMessages.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

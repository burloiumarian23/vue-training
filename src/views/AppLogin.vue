<template>
  <form @submit.prevent="submitForm()">
    <BasicInput
      id="username"
      v-model="username"
      label="Username:"
      name="username"
      placeholder="tony.stark"
    />

    <BasicInput
      id="password"
      v-model="password"
      name="password"
      placeholder="P3PP3RP0775"
      label="Password:"
    />

    <div>
      <input
        type="submit"
        value="Login"
      >
    </div>
  </form>
</template>

<script>
import BasicInput from '@/components/BasicInput.vue'

export default {
  name: 'AppLogin',
  components: {
    BasicInput,
  },
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm () {
      this.$store.dispatch('logIn', {
        username: this.username,
        password: this.password,
      })
        .then(() => {
          // Will be called if no error
          this.$router.push({ name: 'movies' })
        })
    },
  },
}
</script>

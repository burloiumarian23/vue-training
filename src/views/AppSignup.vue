<template>
  <form @submit.prevent="submitForm()">
    <div>
      <BasicInput
        id="username"
        v-model="username"
        name="username"
        placeholder="tony.stark"
        label="Username:"
      />
    </div>

    <div>
      <BasicInput
        id="password"
        v-model="password"
        name="password"
        placeholder="P3PP3RP0775"
        label="Password:"
      />
      <span>
        {{ passwordMessage }}
      </span>
    </div>

    <div>
      <BasicInput
        id="confirmPassword"
        v-model="confirmPassword"
        name="confirmPassword"
        placeholder="P3PP3RP0775"
        label="Confirm password:"
      />
      <span>
        {{ confirmPasswordMessage }}
      </span>
    </div>

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

function validatePassword (password) {
  if (password.length < 4) {
    return 'The password should at least have 4 characters'
  }
  if (!/[a-z]/.test(password)) {
    return 'The password should at least have 1 lowercase letter'
  }
  if (!/[A-Z]/.test(password)) {
    return 'The password should at least have 1 uppercase letter'
  }
  if (!/[0-9]/.test(password)) {
    return 'The password should at least have 1 number'
  }
  if (!/[-$*_;.,!?]/.test(password)) {
    return 'The password should at least have 1 special character'
  }
}

export default {
  name: 'AppLogin',
  components: {
    BasicInput,
  },
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
    }
  },
  computed: {
    passwordMessage () {
      return validatePassword(this.password)
    },
    confirmPasswordMessage () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    },
  },
  methods: {
    submitForm () {
      this.$store.dispatch('logIn', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>

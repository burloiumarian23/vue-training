<template>
  <div :class="type">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'AppMessages',
  computed: {
    type () {
      return this.$store.state.message.type
    },
    message () {
      return this.$store.state.message.message
    },
  },
}
</script>

<style>
.error {
  color: red;
}
.info {
  color: blue;
}
.warning {
  color: orange;
}
.success {
  color: green;
}
</style>

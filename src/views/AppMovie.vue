<template>
  <div>
    {{ movieId }}
  </div>
</template>

<script>
export default {
  name: 'AppMovie',
  props: {
    movieId: {
      type: String,
      default: '',
    },
  },
}
</script>

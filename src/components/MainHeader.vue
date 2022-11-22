<template>
  <header>{{title }}}</header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    title: {
      type: String,
      default: 'Default title',
    },
  },
}
</script>

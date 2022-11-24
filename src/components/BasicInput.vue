<template>
  <span>
    <label :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="value"
      :name="name"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
  </span>
</template>

<script>
export default {
  name: 'BasicInput',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: () => 'a' + String(Math.random()).slice(2),
    },
    name: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>

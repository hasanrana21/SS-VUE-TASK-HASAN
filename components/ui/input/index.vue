<template>
  <div :class="inputWrapper" class="ui-input-wrapper">
    <input class="ui-input" type="text" placeholder="Searching" />
  </div>
</template>
<script>
export default {
  name: 'ui-input',
  props: {
    inputWrapper: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>
<style scoped>
.ui-input-wrapper {
  @apply w-full border-2 border-primary-3/20 focus:border-primary-2 rounded py-2 px-4 bg-primary-3/10;
}
.ui-input {
  @apply w-full focus:outline-none;
}
</style>

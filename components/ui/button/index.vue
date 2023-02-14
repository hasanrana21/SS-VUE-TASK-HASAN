<template>
  <button :class="this.variants[variant]">
    {{ label }}
  </button>
</template>
<script>
export default {
  name: 'ui-button',
  props: {
    label: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      required: false,
    },
    variant: {
      type: String,
      required: false,
      default: 'primary',
    },
  },
  data() {
    return {
      variants: {
        primary: this.outline
          ? 'bg-primary-1'
          : 'hover:transition ease-out duration-300 px-6 py-2 rounded !border-primary-2 hover:border-primary-2 hover:text-white text-lg cursor-pointer hover:bg-primary-2 text-primary-3',
      },
    }
  },
}
</script>

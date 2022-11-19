<template>
    <span class="hover:transition ease-out duration-300 px-6 py-1 rounded border border-primary-3/40 hover:border-primary-1 hover:text-white text-lg text-white cursor-pointer hover:bg-primary-1 text-primary-3">
      {{ label }}
    </span>
  </template>
  <script>
  export default {
    name: 'ui-button',
    props: {
      label: {
        type: String,
        required: true,
      },
    },
  }
  </script>
<template>
    <v-btn class="ma-2 px-12 rounded-lg" outlined color="indigo">
      {{ label }}
    </v-btn>
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
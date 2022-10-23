<template>
  <v-card
    color="blue-grey darken-1
"
    dark
    height="160px"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h6" v-text="data.title"></v-card-title>

        <v-card-subtitle v-text="data.name"></v-card-subtitle>

        <div class="pa-4">
          <slot />
        </div>
      </div>

      <v-avatar class="ma-3 rounded" size="120" tile>
        <v-img :src="data.imageUrl"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>
<script>
export default {
  name: 'ui-card',
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
}
</script>

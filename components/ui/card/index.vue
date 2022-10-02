<template>
  <!-- <v-card class="mx-auto" color="#26c6da" dark max-width="400">
    <v-card-title>
      <span class="text-h6 font-weight-light">{{ data.title }}</span>
    </v-card-title>

    <v-card-text class="title">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error cum odit,
      rem corrupti possimus voluptate perferendis ipsum tempore. Nisi, adipisci?
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-title class="title"> {{ data.name }}</v-list-item-title>

        <slot />
      </v-list-item>
    </v-card-actions>
  </v-card> -->
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

<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
    <v-card-title>
      <span class="text-h6 font-weight-light">{{ data.title }}</span>
    </v-card-title>

    <v-card-text class="title">
      {{ data.description }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-title> {{ data.name }}</v-list-item-title>

        <div class="d-flex">
          <span class="mr-5" style="cursor: pointer">Edit</span>
          <span style="cursor: pointer">Delete</span>
        </div>
      </v-list-item>
    </v-card-actions>
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

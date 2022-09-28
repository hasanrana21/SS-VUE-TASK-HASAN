<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-2">
      <slot name="header"/>
    </div>
    <v-simple-table>
      <thead>
        <tr>
          <th
            v-for="(title, index) in headers"
            :key="index"
            class="text-left title py-4"
            style="cursor: pointer"
            @click="sorting()"
          >
            {{ title.label }}
            <span
              class="mdi title"
              :class="[sorted ? 'mdi-chevron-up' : 'mdi-chevron-down']"
            ></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: 'ui-table',
  props: {
    headers: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sorted: false,
    }
  },
  methods: {
    sorting() {
      this.sorted = !this.sorted
    },
  },
}
</script>

<style scoped></style>

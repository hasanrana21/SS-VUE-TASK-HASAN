<template>
  <div>
    <v-app-bar color="deep-purple px-12">
      <v-toolbar-title class="white--text display-1">Logo</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-for="(item, key) in this.navMenu" :key="key">
        <nuxt-link :to="item.to">
          <span
            v-text="item.label"
            class="mx-4 white--text title"
            style="cursor: pointer"
          ></span>
        </nuxt-link>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: 'ui-navbar',
  data() {
    return {
      navMenu: [
        {
          label: 'Employee',
          to: '/employee',
        },
        {
          label: 'Admin',
          to: '/admin',
        },
      ],
    }
  },
}
</script>

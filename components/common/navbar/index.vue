<template>
  <div class="wrapper">
    <div class="navbar">
      <nuxt-link to="/" class="navbar__logo" style="text-decoration: none">
        <img
          src="https://www.rokomari.com/static/200/images/rokomari_logo.png"
          alt=""
        />
      </nuxt-link>
      <ui-input inputWrapper="col-span-4"></ui-input>
      <div class="navbar__nav">
        <span class="mdi mdi-cart-variant text-5xl"></span>
        <ui-button label="Logins"></ui-button>
        <button @click="printme()">Print Me</button>
      </div>
    </div>
    <nav-menu></nav-menu>
  </div>
</template>
<script>
import UiInput from '@/components/ui/input/index.vue'
import UiButton from '@/components/ui/button/index.vue'
import NavMenu from './NavMenu.vue'
export default {
  name: 'ui-navbar',
  components: { UiInput, UiButton, NavMenu },
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
  methods: {
    printme() {
      console.log('before')
      window.print()
      console.log('after')
    },
  },
}
</script>

<style scoped>
.wrapper {
  @apply bg-white px-20 py-4;
}
.navbar {
  /* grid grid-flow-row grid-cols-3 gap-4 */
  @apply grid grid-flow-row grid-cols-8 gap-y-4 gap-x-8 items-center mb-8;
}
.navbar__logo {
  @apply col-span-2;
}
.navbar__nav {
  @apply flex justify-end items-center space-x-4 col-span-2;
}
</style>

<template>
  <div class="navbar">
    <nuxt-link to="/" class="navbar__logo" style="text-decoration: none">
      <img
        src="https://www.rokomari.com/static/200/images/rokomari_logo.png"
        alt=""
      />
    </nuxt-link>

    <!-- <div class=""> -->
    <ui-input inputWrapper="col-span-4"></ui-input>
    <!-- </div> -->
    <div class="navbar__nav">
      <span class="mdi mdi-cart-variant text-5xl"></span>
      <ui-button label="Login"></ui-button>
    </div>
  </div>
</template>
<script>
import UiInput from '@/components/ui/input/index.vue'
import UiButton from '@/components/ui/button/index.vue'
export default {
  name: 'ui-navbar',
  components: { UiInput, UiButton },
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

<style scoped>
.navbar {
  /* grid grid-flow-row grid-cols-3 gap-4 */
  @apply grid grid-flow-row grid-cols-6 gap-4 items-center space-x-4 bg-white px-36 py-4;
}
.navbar__logo {
  @apply col-span-1;
}
.navbar__nav {
  @apply flex justify-end items-center space-x-4 col-span-1;
}
</style>

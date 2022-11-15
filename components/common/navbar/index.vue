<template>
  <div class="navbar">
    <nuxt-link to="/" style="text-decoration: none">
      <img
        src="https://www.rokomari.com/static/200/images/rokomari_logo.png"
        alt=""
      />
    </nuxt-link>

    <!-- <div class=""> -->
    <ui-input inputWrapper="w-96"></ui-input>
    <!-- </div> -->
    <div class="flex justify-end items-center space-x-4">
      <span class="mdi mdi-cart-variant text-5xl"></span>
      <ui-button label="Login"></ui-button>
    </div>
  </div>
</template>
<script>
import UiInput from '@/components/ui/input/index.vue';
import UiButton from "@/components/ui/button/index.vue";
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
  @apply grid grid-flow-row grid-cols-3 gap-4 items-center space-x-4 bg-primary-1 px-48;
}
</style>

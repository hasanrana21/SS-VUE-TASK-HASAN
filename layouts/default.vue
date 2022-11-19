<template>
  <div class="bg-primary-3/10">
    <navbar></navbar>
    <Nuxt />
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Navbar from '@/components/common/navbar/index.vue'
import Footer from '@/components/common/footer/index.vue'
export default {
  name: 'DefaultLayout',
  components: { Navbar, Footer },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

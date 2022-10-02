<template>
  <div>
    <v-row class="banner-wrapper">
      <v-col
        cols="6"
        class="d-flex justify-center align-center"
        style="height: 75vh"
      >
        <div style="width: 60%">
          <h3 class="text-h3 mb-3 white--text font-weight-medium">
            Join Our Community
          </h3>
          <p class="title white--text mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsam
            quos cum consequatur dolorem quia!
          </p>
          <v-btn rounded color="indigo" class="px-6 py-2" dark>
            JOIN NOW
          </v-btn>
        </div>
      </v-col>
      <v-col cols="6">
        <h5>asdfasdf</h5>
      </v-col>
    </v-row>
    <v-main class="py-7" style="background-color: #ede7f6">
      <v-container>
        <h2 class="display-2 mb-7">Employee</h2>
        <v-row>
          <v-col v-for="(item, key) in this.employees" :key="key" cols="4">
            <ui-card :data="item">
              <nuxt-link to="/employee">
                <v-btn class="" outlined rounded small> GO TO LISTS </v-btn>
              </nuxt-link>
            </ui-card>
          </v-col>
          <v-col
            v-if="!this.employees.length"
            class="text-center pt-10"
          >
            <p class="headline">No Data Found...</p>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="mt-14">
        <h2 class="display-2 mb-7">Admin</h2>
        <v-row>
          <v-col v-for="(item, key) in this.admins" :key="key" cols="4">
            <ui-card :data="item">
              <nuxt-link to="/admin">
                <v-btn class="" outlined rounded small> GO TO LISTS </v-btn>
              </nuxt-link>
            </ui-card>
          </v-col>
          <v-col
            v-if="!this.admins.length"
            class="text-center pt-10"
          >
            <p class="headline">No Data Found...</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-container class="pt-7">
      <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <v-card :color="item.color" dark>
            <v-card-title class="text-h4"> {{ item.title }} </v-card-title>
            <v-card-text class="white text--primary pt-4">
              <p>
                {{ item.description }}
              </p>
              <v-btn color="indigo" outlined rounded small> See Feature </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
import UiCard from '@/components/ui/card/index.vue'
export default {
  name: 'IndexPage',
  components: { UiCard },
  data() {
    return {
      employees: [],
      admins: [],
      items: [
        {
          title: 'About Our Employees',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          title: 'About Our Admins',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          title: 'Planning for Company',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          title: 'Investigation Sections',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }
  },
  methods: {
    fetchEmployees() {
      this.employees = this.$store.state.Employee.employeeLists
    },
    fetchAdmin() {
      this.admins = this.$store.state.Admin.adminLists
    },
  },
  beforeMount() {
    this.fetchEmployees()
    this.fetchAdmin()
  },
}
</script>

<style scoped>
.banner-wrapper {
  background: url('@/assets/images/banner.jpg') rgba(10, 10, 10, 0.519);
  background-blend-mode: overlay;
}
</style>

<template>
  <div class="px-10 py-6">
    <v-app id="inspire">
      <v-main>
        <v-container>
          <h2 class="display-2 mb-7">Employee</h2>
          <v-row>
            <v-col v-for="(item, key) in this.employees" :key="key" cols="4">
              <ui-card :data="item">
                <nuxt-link to="/employee">
                  <v-btn class="" outlined rounded small>
                    GO TO LISTS
                  </v-btn>
                </nuxt-link>
              </ui-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="mt-14">
          <h2 class="display-2 mb-7">Admin</h2>
          <v-row>
            <v-col v-for="(item, key) in this.admins" :key="key" cols="4">
              <ui-card :data="item">
                <nuxt-link to="/admin">
                  <v-btn class="" outlined rounded small>
                    GO TO LISTS
                  </v-btn>
                </nuxt-link>
              </ui-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
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
    }
  },
  methods: {
    fetchEmployees() {
      this.employees = this.$store.state.Employee.employeeLists
    },
    fetchAdmin(){
      this.admins = this.$store.state.Admin.adminLists
    }
  },
  beforeMount() {
    this.fetchEmployees()
    this.fetchAdmin()
  },
}
</script>

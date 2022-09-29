<template>
  <v-container>
    <!-- SHOW EMPLOYEE LISTS -->
    <ui-table v-if="!this.openCreateForm" :headers="this.headers">
      <template #header>
        <span class="headline">Employee Lists</span>
        <span @click="openForm()">
          <ui-button label="Add New"></ui-button>
        </span>
      </template>
      <tr v-for="(item, key) in data" :key="key">
        <td class="title font-weight-regular py-4">{{ item.name }}</td>
        <td class="title font-weight-regular py-4">{{ item.type }}</td>
        <td class="title font-weight-regular py-4">{{ item.email }}</td>
        <td class="title font-weight-regular py-4">{{ item.phone }}</td>
        <td class="title font-weight-regular py-4">
          <span
            class="mdi mdi-square-edit-outline headline mr-6"
            style="cursor: pointer"
          ></span>
          <span
            class="mdi mdi-trash-can-outline headline"
            style="cursor: pointer"
          ></span>
        </td>
      </tr>
    </ui-table>

    <!-- EMPLOYEE CREATE FORM -->
    <employee-create-form v-else @cancel="handleCancel"></employee-create-form>
  </v-container>
</template>
<script>
import UiTable from '@/components/ui/table/index.vue'
import UiButton from '@/components/ui/button/index.vue'
import EmployeeCreateForm from '@/components/local/employee/CreateForm.vue'
export default {
  name: 'employee',
  components: { UiTable, UiButton, EmployeeCreateForm },
  data() {
    return {
      openCreateForm: false,
      data: [
        {
          name: 'Rahim',
          type: 'Admin',
          email: 'rahim@gmail.com',
          phone: '01866389828',
        },
        {
          name: 'Karim',
          type: 'Employee',
          email: 'karim@gmail.com',
          phone: '01666389828',
        },
        {
          name: 'Kuddus',
          type: 'Employee',
          email: 'kuddus@gmail.com',
          phone: '01766389828',
        },
      ],
      headers: [
        {
          label: 'Name',
        },
        {
          label: 'Type',
        },
        {
          label: 'Email',
        },
        {
          label: 'Phone',
        },
        {
          label: 'Action',
        },
      ],
    }
  },
  methods: {
    openForm() {
      this.openCreateForm = true
      console.log('ff', this.openCreateForm)
    },
    handleCancel() {
      this.openCreateForm = false
    },
  },
}
</script>

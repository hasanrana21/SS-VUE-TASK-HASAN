<template>
  <v-container>
    <!-- SHOW EMPLOYEE LISTS -->
    <ui-table
      v-if="!this.openCreateForm && !this.openUpdateForm"
      :headers="this.headers"
    >
      <template #header>
        <span class="headline">Employee Lists</span>
        <span @click="openForm()">
          <ui-button label="Add New"></ui-button>
        </span>
      </template>
      <tr v-for="(item, key) in data" :key="key">
        <td class="title font-weight-regular py-4">{{ item.name }}</td>
        <td class="title font-weight-regular py-4">{{ item.title }}</td>
        <td class="title font-weight-regular py-4">{{ item.email }}</td>
        <td class="title font-weight-regular py-4">{{ item.phone }}</td>
        <td class="title font-weight-regular py-4">
          <span
            class="mdi mdi-square-edit-outline headline mr-6"
            style="cursor: pointer"
            @click="openUpdateForm = true"
          ></span>
          <span
            class="mdi mdi-trash-can-outline headline"
            style="cursor: pointer"
          ></span>
        </td>
      </tr>
    </ui-table>

    <!-- EMPLOYEE CREATE FORM -->
    <employee-create-form
      v-if="this.openCreateForm"
      @cancel="handleCancel"
    ></employee-create-form>

    <!-- EMPLOYEE UPDATE FORM -->
    <employee-update-form
      v-if="this.openUpdateForm"
      @cancel="handleCancel"
    ></employee-update-form>
  </v-container>
</template>
<script>
import UiTable from '@/components/ui/table/index.vue'
import UiButton from '@/components/ui/button/index.vue'
import EmployeeCreateForm from '@/components/local/employee/CreateForm.vue'
import EmployeeUpdateForm from '@/components/local/employee/UpdateForm.vue'
export default {
  name: 'employee',
  components: { UiTable, UiButton, EmployeeCreateForm, EmployeeUpdateForm },
  data() {
    return {
      openCreateForm: false,
      openUpdateForm: false,
      data: [
        {
          name: 'Rahim',
          title: 'Frontend Developer',
          email: 'rahim@gmail.com',
          phone: '01866389828',
        },
        {
          name: 'Karim',
          title: 'Backend Developer',
          email: 'karim@gmail.com',
          phone: '01666389828',
        },
        {
          name: 'Kuddus',
          title: 'Backend Developer',
          email: 'kuddus@gmail.com',
          phone: '01766389828',
        },
      ],
      headers: [
        {
          label: 'Name',
        },
        {
          label: 'Title',
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
      this.openUpdateForm = false
    },
  },
}
</script>

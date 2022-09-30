<template>
  <v-container>
    <!-- SHOW ADMIN LISTS -->
    <ui-table
      v-if="!this.openCreateForm && !this.openUpdateForm"
      :headers="this.headers"
    >
      <template #header>
        <span class="headline">Admin Lists</span>
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
    <div v-if="!this.data.length" class="text-center pt-10">
      <p class="headline">No Data Found</p>
    </div>

    <!-- ADMIN CREATE FORM -->
    <admin-create-form
      v-if="this.openCreateForm"
      @cancel="handleCancel"
      @submit="handleSubmit"
    ></admin-create-form>

    <!-- ADMIN UPDATE FORM -->
    <admin-update-form
      v-if="this.openUpdateForm"
      @cancel="handleCancel"
    ></admin-update-form>
  </v-container>
</template>
<script>
import UiTable from '@/components/ui/table/index.vue'
import UiButton from '@/components/ui/button/index.vue'
import AdminCreateForm from '@/components/local/admin/CreateForm.vue'
import AdminUpdateForm from '@/components/local/admin/UpdateForm.vue'
export default {
  name: 'admin',
  components: { UiTable, UiButton, AdminCreateForm, AdminUpdateForm },
  data() {
    return {
      openCreateForm: false,
      openUpdateForm: false,
      data: [],
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
    handleSubmit() {
      this.openCreateForm = false
    },
  },
  beforeMount(){
    this.data = this.$store.state.Admin.adminLists;
  }
}
</script>

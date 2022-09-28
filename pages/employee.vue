<template>
  <v-container>
    <ui-table :headers="this.headers">
      <template #header> 
        <ui-button label="Add New"></ui-button>  
      </template>
      <tr v-for="(item, key) in data" :key="key">
        <td class="title font-weight-regular py-4">{{ item.name }}</td>
        <td class="title font-weight-regular py-4">{{ item.type }}</td>
        <td class="title font-weight-regular py-4">{{ item.email }}</td>
        <td class="title font-weight-regular py-4">{{ item.title }}</td>
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
  </v-container>
</template>
<script>
import UiTable from '@/components/ui/table/index.vue'
import UiButton from '@/components/ui/button/index.vue'
export default {
  name: 'employee',
  components: { UiTable, UiButton },
  data() {
    return {
      data: [
        {
          name: 'Rahim',
          type: 'Admin',
          email: 'rahim@gmail.com',
          title: 'Sr. Frontend Developer',
        },
        {
          name: 'Karim',
          type: 'Employee',
          email: 'karim@gmail.com',
          title: 'Sr. Backend Developer',
        },
        {
          name: 'Kuddus',
          type: 'Employee',
          email: 'kuddus@gmail.com',
          title: 'Team Lead',
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
          label: 'Title',
        },
        {
          label: 'Action',
        },
      ],
    }
  },
}
</script>

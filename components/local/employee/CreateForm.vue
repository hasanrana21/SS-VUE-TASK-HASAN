<template>
  <form @submit.prevent="createEmployee">
    <h3>this is Employee Create Form</h3>
    <v-text-field
      v-model="formData.name"
      :rules="useValidation.nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.email"
      :rules="useValidation.emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.phone"
      :counter="11"
      :rules="useValidation.phoneRules"
      label="Phone"
      required
      type="number"
    ></v-text-field>
    <v-select
      v-model="formData.type"
      :items="items"
      label="Select type"
    ></v-select>
    <ui-button type="submit" label="Save"></ui-button>
    <span @click="$emit('cancel')">
      <ui-button label="Cancel"></ui-button>
    </span>
  </form>
</template>
<script>
import UiButton from '@/components/ui/button/index.vue'
// import UiInput from '@/components/ui/input/index.vue'
export default {
  name: 'employee-create-form',
  components: { UiButton },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        type: '',
      },
      items: ['Admin', 'Employee'],
      useValidation: {
        nameRules: [(v) => !!v || 'Name is required'],

        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        phoneRules: [
          (v) => !!v || 'Phone number is required',
          (v) => (v && v.length == 11) || 'Number must be 11 characters',
        ],
      },
    }
  },
  methods: {
    createEmployee() {
      console.log('created employee', this.formData)
    },
  },
}
</script>

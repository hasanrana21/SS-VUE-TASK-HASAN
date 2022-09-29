<template>
  <form ref="form" @submit.prevent="createEmployee">
    <h2 class="display-1 mb-7 mt-2">Employee Create Form</h2>
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
// import { store } from '@/store'
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
      items: [
        'CEO',
        'CTO',
        'Frontend Developer',
        'Backend Developer',
        'Project Manager',
        'Team Lead',
      ],
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
      this.$store.commit('Employee/setEmployee', this.formData)
      this.reset()
    },
    reset() {
      this.$refs.form.reset();
    },
  },
}
</script>

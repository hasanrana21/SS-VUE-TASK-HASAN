<template>
  <form @submit.prevent="createEmployee">
    <h3>this is Employee Create Form</h3>
    <ui-button type="submit" label="Save"></ui-button>
    <span @click="$emit('cancel')">
      <ui-button label="Cancel"></ui-button>
    </span>
  </form>
</template>
<script>
import UiButton from '@/components/ui/button/index.vue'
export default {
  name: 'employee-create-form',
  components: { UiButton },
  data() {
    return {}
  },
  methods: {
    createEmployee() {
      console.log('created employee')
    },
  },
}
</script>

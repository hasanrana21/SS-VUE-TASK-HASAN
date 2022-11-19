<template>
  <div class="category-wrapper">
    <div class="category" v-for="(item, key) in categories" :key="key">
      {{ item }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-category',
  props: {
    categories: {
      type: Array,
      require: true,
      default: [],
    },
  },
}
</script>
<style scoped>
.category-wrapper {
  @apply flex items-center justify-between;
}
.category {
  @apply border border-primary-3 hover:border-primary-2 font-medium w-48 p-4 text-center rounded cursor-pointer hover:bg-primary-2 hover:text-white;
}
</style>

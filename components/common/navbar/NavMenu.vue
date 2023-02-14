<template lang="">
  <ul class="nav-menu">
    <li v-for="(item, index) in menus" :key="index">
      {{ item.label }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'nav-menu',
  data() {
    return {
      menus: [
        {
          label: 'লেখক',
        },
        {
          label: 'বিষয়',
        },
        {
          label: 'প্রকাশনী',
        },
        {
          label: 'বইমেলা ২০২২',
        },
        {
          label: 'ইসলামি বই',
        },
        {
          label: 'উপন্যাস',
        },
        {
          label: 'বিজ্ঞানবাক্স',
        },
        {
          label: 'ফ্রিল্যান্সিং/প্রোগ্রামিং',
        },
        {
          label: 'পশ্চিমবঙ্গের বই',
        },
        {
          label: 'অতিরিক্ত ছাড়ের বই',
        },
      ],
    }
  },
}
</script>
<style scoped>
.nav-menu {
  @apply flex justify-between items-center px-6;
}
.nav-menu li {
  @apply border border-primary-3 px-4 py-2 rounded cursor-pointer;
}
</style>

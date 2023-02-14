<template>
  <div class="grid grid-flow-row grid-cols-5 gap-8">
    <div class="card" v-for="(item, key) in data" :key="key">
      <div class="card__image">
        <img :src="item.image" alt="" class="mx-auto" />
      </div>
      <div class="card__text-wrapper">
        <h3 class="text-lg font-normal mb-1">{{ item.name }}</h3>
        <p class="text-base mb-1">{{ item.author }}</p>
        <h3 class="text-lg font-medium mb-5">
          <span class="line-through mr-2">TK. {{ item.old_price }}</span>
          <span class="">TK. {{ item.price }}</span>
        </h3>
        <router-link to="/product-details">
          <ui-button label="View Details"></ui-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import UiButton from '@/components/ui/button/index.vue'
export default {
  name: 'ui-card',
  components: { UiButton },
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
}
</script>

<style scoped>
.card {
  @apply border-2 border-primary-3/20 p-5 cursor-pointer rounded;
}
.card__image {
}
.card__text-wrapper {
  @apply pt-5 text-center;
}
</style>

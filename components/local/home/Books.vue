<template lang="">
  <div class="">
    <ui-card :data="this.books"></ui-card>
  </div>
</template>
<script>
import UiCard from '@/components/ui/card/index.vue'
export default {
  name: 'home-books',
  components: { UiCard },
  data() {
    return {
      books: [
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
        {
          name: 'The Best War Stories',
          author: 'DEL H Khan',
          old_price: '600',
          price: '350',
          image:
            'https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/f77bc1c00_195520.jpg',
        },
      ],
    }
  },
}
</script>
<style lang=""></style>

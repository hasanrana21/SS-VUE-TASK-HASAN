<template>
  <ui-page-wrapper>
    <ui-section>
      <div class="grid grid-cols-12 gap-y-4 w-full">
        <div class="col-span-3 border-2 p-4">
          <img
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/130X186/Nabiji_SM-Nila_Harun-69bc1-223006.jpg"
            alt=""
          />
        </div>
        <div class="col-span-6 border-2 p-4">
          <h3 class="title">নবীজি (সা.) (হার্ডকভার)</h3>
          <p class="subtitle">দ্য ব্লেসড ওয়ান</p>
          <span class="author">by <a href="#">নীলা হারুন</a></span>
          <h5 class="category">Category: সীরাতে রাসুল ﷺ</h5>
          <h3 class="text-lg font-medium">TK. 400 TK. 220</h3>
          <ul>
            <li>In Stock (only 12 copies left)</li>
            <li>* স্টক আউট হওয়ার আগেই অর্ডার করুন</li>
          </ul>
          <div>
            <ui-button label="Read Something"></ui-button>
            <ui-button label="Go To Cart"></ui-button>
          </div>
        </div>
        <div class="col-span-3 border-2 p-4">asdfasdf</div>
      </div>
    </ui-section>
  </ui-page-wrapper>
</template>
<script>
import UiButton from '@/components/ui/button/index.vue'
export default {
  name: 'product-details',
  components: { UiButton },
}
</script>
<style scoped>
.title {
  @apply text-xl font-medium;
}
.subtitle {
  @apply text-base;
}
.author {
  @apply font-semibold;
}
.category {
}
</style>

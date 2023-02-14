<template>
  <ui-page-wrapper>
    <ui-section>
      <home-books></home-books>
    </ui-section>
    <ui-section>
      <home-category :categories="categories"></home-category>
    </ui-section>
  </ui-page-wrapper>
</template>

<script>
import UiPageWrapper from '@/components/ui/page-wrapper/index.vue'
import HomeBooks from '@/components/local/home/Books.vue'
import HomeCategory from '@/components/local/home/Category.vue'
import UiSection from '@/components/ui/section/index.vue'
export default {
  name: 'IndexPage',
  components: { UiPageWrapper, HomeBooks, HomeCategory, UiSection },
  data() {
    return {
      employees: [],
      admins: [],
      items: [
        {
          title: 'About Our Employees',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          title: 'About Our Admins',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          title: 'Planning for Company',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          title: 'Investigation Sections',
          description:
            'scaevola imperdiet nec ut, sed euismod convenire principes at.Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
      categories: [
        'উপন্যাস',
        'ইসলামি বই',
        'কমিকস ও ছবির গল্প',
        'কম্পিউটার ও ফ্রিল্যান্সিং',
        'কৃষি ও কৃষক',
      ],
    }
  },
  methods: {
    fetchEmployees() {
      this.employees = this.$store.state.Employee.employeeLists
    },
    fetchAdmin() {
      this.admins = this.$store.state.Admin.adminLists
    },
  },
  beforeMount() {
    this.fetchEmployees()
    this.fetchAdmin()
  },
}
</script>

<style scoped>
.banner-wrapper {
  background: url('@/assets/images/banner.jpg') rgba(10, 10, 10, 0.519);
  background-blend-mode: overlay;
}
</style>

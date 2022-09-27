<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, key) in this.list" :key="key" cols="4">
        <ui-card :data="item"></ui-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UiCard from '@/components/ui/card/index.vue'
export default {
  name: 'employee',
  components: { UiCard },
  data() {
    return {
      list: [
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
        {
          title: 'Title',
          description:
            'Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well.',
          name: 'Even You',
        },
      ],
    }
  },
}
</script>

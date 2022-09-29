<template>
  <div>
    <ul>
      <template v-for="(item, index) in eventItem" :key="items.id">
        <li>
          id: {{ item.id }}, index: {{ index }}, message: {{ item.message }}
        </li>
      </template>
    </ul>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }} = {{ key }} - {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  setup() {
    const items = reactive([
      { id: 1, message: 'Vue1' },
      { id: 2, message: 'Vue2' },
      { id: 3, message: 'Vue3' },
      { id: 4, message: 'Vue4' },
    ])

    const eventItem = computed(() => items.filter(item => item.id % 2 === 0))

    const myObject = reactive({
      title: '제목',
      author: '변지운',
      published: '2022-09-29',
    })

    return { items, eventItem, myObject }
  },
}
</script>

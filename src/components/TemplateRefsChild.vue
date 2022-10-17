<template>
  <div>{{ $parent }}</div>
  <ul>
    <li v-for="(fruit, i) in $parent.fruits" :key="i">{{ fruit }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TemplateRefsChild',
  setup() {
    const message = ref('Hello!')
    const sayHello = () => alert(message.value)
    return { message, sayHello }
  },
}
</script>

<style scoped></style>

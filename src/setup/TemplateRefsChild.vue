<template>
  <div>{{ $parent }}</div>
  <ul>
    <li v-for="(fruit, i) in $parent.fruits" :key="i">{{ fruit }}</li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello!')
const sayHello = () => alert(message.value)

defineExpose({
  message,
  sayHello,
})
</script>

<style scoped></style>

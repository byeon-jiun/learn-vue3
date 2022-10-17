<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">provide-inject</div>
      <div class="card-body">
        <button @click="count++">click</button>
        <child></child>
      </div>
    </div>
  </div>
</template>

<script>
import Child from './Child.vue'
import { provide, ref, readonly } from 'vue'
export default {
  name: 'ProvideInject',
  components: { Child },
  setup() {
    const staticMessage = 'static-message'
    const message = ref('message')
    const updateMessage = appendMessage =>
      (message.value = message.value + appendMessage)
    const count = ref(10)
    provide('static-message', staticMessage)
    provide('message', { message: readonly(message), updateMessage })
    provide('count', count)
    return { count }
  },
}
</script>

<style scoped></style>

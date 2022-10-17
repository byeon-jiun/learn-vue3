<template>
  <div class="card">
    <div class="card-header">deep-child-component</div>
    <div class="card-body">
      <p>staticMessage : {{ staticMessage }}</p>
      <p>message : {{ message }}</p>
      <p>count : {{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'DeepChild',
  setup() {
    const staticMessage = inject('static-message', 'default-message')
    const { message, updateMessage } = inject('message')
    updateMessage('!')
    const count = inject('count')
    return { staticMessage, message, count }
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <p>{{ state }}</p>
    <button @click="increment">Click</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const state = ref(0)
    const increment = () => {
      state.value++
    }
    return {
      state,
      increment,
    }
  },
}
</script>

<style scoped></style>

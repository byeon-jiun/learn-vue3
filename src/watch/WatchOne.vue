<template>
  <div></div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  setup() {
    const message = ref('')

    watch(message, (n, o) => {
      console.log(n)
      console.log(o)
    })

    return { message }
  },
}
</script>

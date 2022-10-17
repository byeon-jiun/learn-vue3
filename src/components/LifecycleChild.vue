<template>
  <div class="card">
    <div class="card-body">lifecycle-child</div>
    <input id="input" type="text" />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue'

export default {
  name: 'LifecycleChild',
  setup() {
    console.log('[Child] setup')
    onBeforeMount(() => console.log('[Child] onBeforeMount'))
    onMounted(() => console.log('[Child] onMounted'))
    onBeforeUnmount(() =>
      console.log('[Child] onBeforeUnmount', document.querySelector('#input')),
    )
    onUnmounted(() =>
      console.log('[Child] onUnmounted', document.querySelector('#input')),
    )
    return {}
  },
}
</script>

<style scoped></style>

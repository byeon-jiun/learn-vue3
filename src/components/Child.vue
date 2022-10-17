<template>
  <div class="card">
    <div class="card-header">child-component</div>
    <div class="card-body">
      <deep-child></deep-child>
    </div>
  </div>
</template>

<script>
import DeepChild from './DeepChild.vue'
export default {
  name: 'Child',
  components: { DeepChild },
}
</script>

<style scoped></style>

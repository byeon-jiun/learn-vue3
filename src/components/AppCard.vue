<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" :header-message="'헤더'"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" :hello-message="helloMessage"></slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" :footer-message="'푸터'"></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식 컴포넌트 메시지')
    const helloMessage = ref('안녕하세요')
    const hasFooter = computed(() => !!slots.footer)
    return { childMessage, helloMessage, hasFooter }
  },
}
</script>

<style scoped></style>

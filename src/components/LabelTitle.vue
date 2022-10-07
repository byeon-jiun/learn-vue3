<template>
  <div>
    <label>
      {{ headTitle }}
      <input type="text" v-model="value" />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  /** 컴퓨티드로 구현*/
  props: {
    headTitle: {
      type: String,
    },
    title: {
      type: String,
    },
  },
  emits: ['update:title'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.title
      },
      set(value) {
        emit('update:title', value)
      },
    })
    return { value }
  },
}
</script>

<style scoped></style>

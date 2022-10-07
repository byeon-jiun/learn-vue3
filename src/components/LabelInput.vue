<template>
  <div>
    <label class="form-label">
      {{ headTitle }}
      <!--      <input
        type="text"
        :value="modelValue"
        @input="event => $emit('update:modelValue', event.target.value)"
      />-->
    </label>
    <input type="text" class="form-control" v-model="value" />
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
    modelValue: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })
    return { value }
  },
}
</script>

<style scoped></style>

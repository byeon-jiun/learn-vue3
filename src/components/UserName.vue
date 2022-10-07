<template>
  <div>
    <label-input
      :model-value="firstname"
      @update:model-value="value => $emit('update:firstname', value)"
      :head-title="'성'"
    ></label-input>
    <label-input
      :model-value="lastname"
      @update:model-value="value => $emit('update:lastname', value)"
      :head-title="'이름'"
    ></label-input>
  </div>
</template>

<script>
import LabelInput from './LabelInput.vue'
export default {
  props: {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
  },
  emits: ['update:firstname', 'update:lastname'],
  components: {
    LabelInput,
  },
}
</script>

<style scoped></style>

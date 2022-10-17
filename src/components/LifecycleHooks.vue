<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello world!" />
    <hr />
    <button @click="visible = !visible">Toogle Child</button>
    <lifecycle-child v-if="visible"></lifecycle-child>
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue'
import LifecycleChild from './LifecycleChild.vue'
export default {
  name: 'LifecycleHooks',
  components: { LifecycleChild },
  setup() {
    console.log('setup')
    const inputRef = ref(null)
    const message = ref('')
    const visible = ref(false)
    onBeforeMount(() => console.log('onBeforeMount'))
    /*dom 에 접근 가능*/
    onMounted(() => console.log('onMounted', inputRef.value.value))

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', message.value)
      console.log(
        'DOM content : ',
        document.querySelector('#message').textContent,
      )
    })

    onUpdated(() => {
      console.log('onUpdated', message.value)
      console.log(
        'DOM content : ',
        document.querySelector('#message').textContent,
      )
    })
    return { inputRef, message, visible }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
}
</script>

<style scoped></style>

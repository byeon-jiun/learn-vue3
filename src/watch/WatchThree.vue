<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref, watch } from 'vue'

export default {
  setup() {
    const message = ref('hello')
    const reverseMessage = ref('')

    /** immediate 콜백을 즉시 한번 실행 해준다. watch 는 call, api, push, route 등을 하고자 할때 쓰는게 좋고 computed 로 구현 가능한거면 computed 로 하는게 좋다. */
    watch(
      message,
      n => {
        reverseMessage.value = n.split('').reverse().join('')
      },
      { immediate: true },
    )

    /** 동일 로직 computed 예시 */
    /*const reverseMessage = computed(() =>
      message.value.split('').reverse().join(''),
    )*/

    return { reverseMessage, message }
  },
}
</script>

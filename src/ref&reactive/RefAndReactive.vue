<template>
  <div></div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  /**
   * (1) ref -> Object, (2) ref -> Array
   * @returns {{state: UnwrapNestedRefs<{count: Ref<UnwrapRef<number>>}>}}
   */
  setup() {
    /**(1)*/
    const count = ref(0)
    const state = reactive({ count })
    count.value++
    console.log(count.value)
    console.log(state.count)

    /**(2) 반응형 상태를 배열에 넣었을땐 .value 가 붙어야 된다. */
    const message = ref('Hello')
    const arr = reactive([message])
    console.log(arr[0].value)
  },
}
</script>

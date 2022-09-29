<template>
  <div></div>
</template>

<script>
import { $ref } from 'vue/macros'

export default {
  setup() {
    /** $ 를 붙히게 되면 반응 변수로 처리한다. .value를 쓰지 않아도 된다. 단 해당문법으로 컴파일이 되지는 않는다 - ts 써야되는거 같음
     * ref->$ref
     * computed->$computed
     * shallowRef->$shallowRef
     * customRef->$customRef
     * toRef->$toRef */
    let count = $ref(0)
    count++
    console.log(count)

    return {}
  },
}
</script>

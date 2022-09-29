<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from 'vue'

export default {
  setup() {
    const original = reactive({
      count: 0,
    })
    /** readonly 를 이용하면 객체의 변이를 막을수 있다.*/
    const copy = readonly(original)
    original.count++
    /*copy.count++*/
    console.log(original.count)
    console.log(copy.count)

    return {}
  },
}
</script>

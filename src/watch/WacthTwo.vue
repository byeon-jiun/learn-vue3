<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const x = ref(0)
    const y = ref(0)
    const obj = reactive({
      count: 0,
    })
    const person = reactive({
      name: '변지운',
      age: 30,
      hobby: '운동',
      obj: { count: 0 },
    })

    /** (1)*/
    /*watch(
      () => x.value + y.value,
      (n, o) => {
        console.log(n)
        console.log(o)
      },
    )*/

    /** (2)*/
    /*watch([x, y], ([n, o]) => {
      console.log(n)
      console.log(o)
    })*/

    /** (3) obj 게터 해줘야댐*/
    /*watch(
      () => obj.count,
      (n, o) => {
        console.log(n)
        console.log(o)
      },
    )*/

    /** (4) 암시적으로 deep, 특정 obj 만 넘길시 해당하는 데이터가 변경될때만 감지 */
    /*watch(person, (n, o) => {
      console.log(n)
      console.log(o)
    })*/
    watch(person.obj, n => {
      console.log(n)
    })

    return { x, y, obj, person }
  },
}
</script>

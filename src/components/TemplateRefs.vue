<template>
  <div class="container py-4">
    <input type="text" ref="input" />
    <p v-if="input">{{ input.value }} , {{ $refs.input.value }}</p>
    <hr />
    <ul>
      <!--      <li v-for="(fruit, i) in fruits" :key="i" ref="itemRefs">{{ fruit }}</li>-->
      <li
        v-for="(fruit, i) in fruits"
        :key="i"
        :ref="el => itemRefs.push(el.textContent)"
      >
        {{ fruit }}
      </li>
    </ul>
    <hr />
    <template-refs-child ref="child"></template-refs-child>
  </div>
</template>

<script>
import TemplateRefsChild from './TemplateRefsChild.vue'
import { onMounted, ref } from 'vue'

export default {
  name: 'TemplateRefs',
  components: { TemplateRefsChild },
  setup() {
    const input = ref(null)
    onMounted(() => {
      input.value.value = 'hello!'
      console.log('onMounted :', input.value)

      /*itemRefs.value.forEach(item => console.log('item: ', item.textContent))*/
      itemRefs.value.forEach(item => console.log('item: ', item))

      console.log('child :', child.value.message)
      /*child.value.sayHello()*/
    })

    const fruits = ref(['사과', '딸기', '포도'])
    const itemRefs = ref([])

    const child = ref(null)
    return { input, fruits, itemRefs, child }
  },
}
</script>

<style scoped></style>

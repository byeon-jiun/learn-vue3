<template>
  <div class="container py-4">
    {{ msg }}
    <post-item
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></post-item>
    <post-item
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></post-item>
    <post-item
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></post-item>
    <hr />
    <template-refs-child ref="child"></template-refs-child>
    <template v-if="child"> {{ child.message }}</template>
    <hr />
    <my-button class="parent-class"></my-button>
  </div>
</template>

<script setup>
import axios from 'axios'
import PostItem from '../setup/PostItem.vue'
import TemplateRefsChild from '../setup/TemplateRefsChild.vue'
import MyButton from '../setup/MyButton.vue'
import { ref } from 'vue'

const msg = 'hello !'
const child = ref(null)
defineExpose({
  msg,
})

const response = await axios(
  'https://dummy.restapiexample.com/api/v1/employees',
)
console.log('response ::', response.data)
</script>

<style scoped></style>

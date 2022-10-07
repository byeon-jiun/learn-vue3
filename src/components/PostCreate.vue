<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input
        type="text"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
        v-model="title"
      />
    </div>
    <div class="col col-2 d-grid">
      <!-- @click="$emit('createPost', '조서은', '바보')"-->
      <button class="btn btn-primary mb-2" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  /*emits: ['createPost'],*/
  emits: {
    createPost: value => {
      if (!value.type) {
        return false
      } else if (!value.title) {
        return false
      }
      return true
    },
  },
  setup(props, { emit }) {
    const title = ref('')
    const type = ref('news')
    const createPost = () => {
      const newPost = {
        type: type.value,
        title: title.value,
      }
      emit('createPost', newPost)
      type.value = 'news'
      title.value = ''
    }
    return { createPost, title, type }
  },
}
</script>

<style scoped></style>

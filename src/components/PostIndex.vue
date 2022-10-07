<template>
  <main>
    <div class="container py-4">
      <post-create @create-post="createPost"></post-create>

      <hr class="my-4" />

      <div class="row g-3">
        <div class="col col-4" v-for="post in posts" :key="post.title">
          <post-item
            :title="post.title"
            :contents="post.contents"
            :is-like="post.isLike"
            :type="post.type"
          ></post-item>
        </div>
      </div>
      <hr class="my-4" />
      <label-input
        v-model="username"
        :head-title="'이름'"
        class="parent-class"
        style="color: red"
        id="parent-id"
      ></label-input>
    </div>
  </main>
</template>

<script>
import PostItem from './PostItem.vue'
import PostCreate from './PostCreate.vue'
import LabelInput from './LabelInput.vue'
import { reactive, ref } from 'vue'
export default {
  components: { PostItem, PostCreate, LabelInput },

  setup() {
    const posts = reactive([
      { title: '제목1', contents: '내용1', type: 'news', isLike: true },
      { title: '제목2', contents: '내용2', type: 'news', isLike: true },
      { title: '제목3', contents: '내용3', type: 'news', isLike: true },
      { title: '제목4', contents: '내용4', type: 'news', isLike: true },
      { title: '제목5', contents: '내용5', type: 'notice', isLike: false },
      { title: '제목6', contents: '내용6', type: 'notice', isLike: false },
    ])

    const username = ref('')
    const firstname = ref('')
    const lastname = ref('')
    const createPost = value => {
      console.log('createPost', value)
      posts.push(value)
    }
    return { posts, createPost, username, lastname, firstname }
  },
}
</script>

<style scoped></style>

<template>
  <div>
    <form @submit.prevent="save(title, contents)">
      <input type="text" v-model.lazy="title" />
      <textarea v-model.lazy="contents" />
      <hr />
      <button>저장</button>
    </form>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from 'vue'

export default {
  setup() {
    const title = ref('')
    const contents = ref('')

    const save = (title, contents) => {
      console.log(`저장 완료 title: ${title}, contents: ${contents}`)
    }

    /** 콜백 함수 안에서 일어나는 값을 감시함, 최초 1번 무조건 실행 된다*/
    watchEffect(() => {
      console.log(title.value)
      console.log(contents.value)
      save(title.value, contents.value)
    })
    return { title, contents, save }
  },
}
</script>

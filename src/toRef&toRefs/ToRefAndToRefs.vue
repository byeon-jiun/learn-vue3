<template>
  <div>
    <p>{{ author }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  setup() {
    const book = reactive({
      author: 'Vue Team',
      year: '2022',
      title: 'Vue3 Guide',
      description: '당신은 지금 바로 이 책을 읽습니다.',
      price: '무료',
    })

    /** 구조분해를 하면 반응성을 잃어버린 스트링 값이 된다.
     * toRefs 를 사용 하면 구조 분해 할때 반응형을 유지 시켜 준다. 하나씩 가져올때는 toRef(오브젝트, '키값')*/
    const { author, title } = toRefs(book)

    return {
      author,
      title,
      book,
    }
  },
}
</script>

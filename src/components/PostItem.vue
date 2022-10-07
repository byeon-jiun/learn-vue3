<template>
  <div class="card">
    <div class="card-body">
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass">좋아요</a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  /** $props 로 접근 할수도 있다. */
  props: {
    type: {
      type: String,
      default: 'news',
      validator(value) {
        return ['news', 'notice'].includes(value)
      },
    },
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      /*required: true,*/
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const isLikeClass = computed(() =>
      props.isLike ? 'btn-danger' : 'btn-outline-danger',
    )
    const typeName = computed(() =>
      props.type === 'news' ? '뉴스' : '공지사항',
    )
    return { isLikeClass, typeName }
  },
}
</script>

<style scoped></style>

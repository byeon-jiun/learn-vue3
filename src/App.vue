<template>
  <div>
    <the-nav></the-nav>
    <the-view></the-view>
    <!--<post-index></post-index>-->
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'
import TheView from './components/TheView.vue'
import PostIndex from './components/PostIndex.vue'
export default {
  components: {
    TheNav,
    TheView,
  },

  setup() {
    return {}
  },
}
</script>

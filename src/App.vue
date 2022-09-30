<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
  </div>
</template>

<script>
import TheNav from './components/TheNav'
import TheView from './components/TheView'
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

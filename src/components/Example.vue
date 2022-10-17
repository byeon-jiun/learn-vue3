<template>
  <main>
    <div class="container py-4">
      <my-button @click="sayHello"></my-button>
      <label-input></label-input>
      <hr />
      <fancy-button>click</fancy-button>
      <fancy-button v-slot="{ fancyMessage }"> {{ fancyMessage }}</fancy-button>
      <hr />
      <app-card>
        <!--        <template #[slotArgs]># 상단</template>-->
        <template #[slotArgs]="{ headerMessage }">{{ headerMessage }}</template>
        <template #default="{ childMessage, helloMessage }">
          {{ childMessage }},
          {{ helloMessage }}
        </template>
        <template #footer="{ footerMessage }">{{ footerMessage }}</template>
      </app-card>
      <hr />
      <app-card> 게시글 입니다. </app-card>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue'
import LabelInput from './LabelInput.vue'
import FancyButton from './FancyButton.vue'
import AppCard from './AppCard.vue'
import { ref } from 'vue'
export default {
  components: { MyButton, LabelInput, FancyButton, AppCard },
  setup() {
    const sayHello = () => alert('안녕하세요')

    const slotArgs = ref('header')
    return { sayHello, slotArgs }
  },
}
</script>

<style scoped></style>

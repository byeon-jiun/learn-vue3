<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLectures }}</p>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  setup() {
    const teacher = reactive({
      name: '지운',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    })
    /** 반응형 api computed는 여러번 호출해도 값이 변하지 않는이상 한번만 실행 된다. 메서드 보다 성능면에서도 우수하다*/
    const hasLectures = computed(() =>
      teacher.lectures.length > 0 ? '있음' : '없음',
    )

    const firstName = ref('변')
    const lastName = ref('지운')

    /** 왠만하면 computed의 의 값은 변경 하지않는다. 필요한경우 set 속성을 만들어 상태를 업데이트 해야한다. */
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(newValue) {
        ;[firstName.value, lastName.value] = newValue.split(' ')
      },
    })
    return { teacher, hasLectures, fullName }
  },
}
</script>

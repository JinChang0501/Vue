<script setup>
import { ref,reactive } from 'vue'

const money = ref(0)
const fruit = reactive(['蘋果','香蕉','橘子'])
const user = reactive({
  name: "Jin",
  age:18
})

money.value = 10000

console.log(money.value)

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ money }}</h1>
  <h2>{{ fruit[2] }}</h2>
  <h3>{{ user.name }}是{{user.age}}歲</h3>
  <img src="/dog.jpg" alt="">
  <img src="../assets/dog.jpg" alt="">

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

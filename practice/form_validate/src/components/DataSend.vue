<script setup>

import { ref } from 'vue'

const props = defineProps({
  msgFromParent: String,
  salary: Number,
  msgToChild: String
})

let showMsg = ref('')
const emit = defineEmits(['update:msg'])
const sentMsg = () => {
  emit('update:msg', showMsg);
}

</script>

<template>
  <h2>{{ props.msgFromParent }}<br>我薪水{{ props.salary }}</h2>
  <h2>Parent輸入的訊息:{{ msgToChild }}</h2>
  <input type="text" placeholder="輸入傳給Parent的訊息" v-model="showMsg">
  <button type="button" @click="sentMsg">傳送到Parent</button>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
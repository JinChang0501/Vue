<script setup>
import { ref } from 'vue';
import { testStores } from '../stores/testStores'
import { storeToRefs } from 'pinia';
const todoStore = testStores()
const { finishedTodos } = storeToRefs(todoStore)
const { addTodo } = todoStore
const newItem = ref('')
console.log(todoStore)
</script>

<template>
  <h1>PiniaStore</h1>
  <div class="container">
    <input type="text" v-model="newItem">
    <button type="button" @click="addTodo(newItem)">Click</button>
    <h1>所有Todos</h1>

    <ul>
      <li class="item" v-for="item in todoStore.todos">{{ item.text }}</li>
    </ul>
  </div>

  <h2>已完成清單</h2>
  <ul>
    <li class="item" v-for="finsih_item in finishedTodos">{{ finsih_item.text }}</li>
  </ul>
</template>


<style scoped>
button {
  width: 100%;
  margin: 20px 0;
  background-color: rgb(69, 83, 207);
}
</style>
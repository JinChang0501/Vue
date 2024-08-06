<script setup>
import PiniaStore from './components/PiniaStore.vue';
import { testStores } from './stores/testStores';
const toDoStore = testStores()
</script>

<template>
  <PiniaStore />
  <h3>從複層讀取Todos</h3>
  <ul>
    <li v-for="item in toDoStore.todos">{{ item.text }}</li>
  </ul>
</template>

<style scoped></style>

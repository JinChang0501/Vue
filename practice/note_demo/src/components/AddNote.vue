<script setup>
import { ref } from 'vue'
import { testNotes } from '../stores/testNotes'
const todoNotes = testNotes()
const { addPinned } = todoNotes;

const newTitle = ref('')
const newContent = ref('')



</script>

<template>
  <h1>AddNote</h1>
  <div class="container">
    <form action="" @submit.prevent="addPinned(newTitle, newContent)">
      <input type="text" class="w-100 mb-3" v-model="newTitle">

      <textarea name="" id="" class="w-100" rows="10" v-model="newContent"></textarea>
      <button>Submit</button>
    </form>
  </div>




</template>

<style scoped></style>

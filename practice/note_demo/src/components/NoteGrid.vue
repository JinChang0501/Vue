<script setup>
import { ref } from 'vue'
import { testNotes } from '../stores/testNotes'
const todoNotes = testNotes()

</script>

<template>
  <h1>NoteGrid</h1>
  <div class="container">
    <div class="row">

      <div v-for="note in todoNotes.notes" class="col-3">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ note.text }}</h5>
            <p class="card-text">{{ note.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<style scoped>
.card {
  width: 100%;
  margin-top: 20px;
  margin-left: 20px;
  padding: 1em;
}
</style>

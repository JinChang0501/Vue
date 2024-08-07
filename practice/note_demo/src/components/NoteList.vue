<script setup>
import { testNotes } from '../stores/testNotes'
import { storeToRefs } from 'pinia';
const todoNotes = testNotes();
const { pinnedNotes } = storeToRefs(todoNotes);
const { markedPin } = todoNotes;
console.log(pinnedNotes);
</script>

<template>
  <div>
    <button class="my-3 bg-warning w-100">
      <router-link to="addnote">新增Note</router-link>
    </button>
  </div>
  <div class="important">
    <h3><i class="bi bi-pin-angle-fill me-3"></i>重要</h3>
    <ul class="list-group">

      <li v-for="note in pinnedNotes" :key="note.id" class="list-group-item d-flex justify-content-between">{{ note.text
        }}
        <div>
          <i class="bi bi-pin-angle-fill" @click="markedPin(note.id)"></i>
          <i class="bi bi-trash3-fill"></i>
        </div>

      </li>
    </ul>
  </div>

  <div class="all">
    <h3><i class="bi bi-box-seam me-3"></i>所有</h3>
    <ul class="list-group">
      <li v-for="note in todoNotes.notes" :key="note.id" class="list-group-item d-flex justify-content-between">{{
        note.text }}
        <div>

          <i class="bi bi-pin-fill" @click="markedPin(note.id)"></i>
          <i class="bi bi-trash3-fill"></i>

        </div>

      </li>
    </ul>
  </div>

</template>


<style scoped>
.list-group {
  margin-bottom: 20px;
}

i {
  cursor: pointer;
}
</style>
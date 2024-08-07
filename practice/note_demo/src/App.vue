<script setup>
import NoteGrid from './components/NoteGrid.vue'
import TopBar from './components/TopBar.vue'
import NoteList from './components/NoteList.vue'
// import { RouterView } from 'vue-router';
</script>

<template>
  <TopBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <NoteList />
      </div>
      <div class="col-9">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<style scoped></style>

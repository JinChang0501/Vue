import { createRouter, createWebHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";
import AddNote from "./components/AddNote.vue";

const routes = [
  {
    path: "/",
    name: "grid",
    component: NoteGrid,
  },
  {
    path: "/addnote",
    name: "addnote",
    component: AddNote,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;

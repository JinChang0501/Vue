import { createRouter, createWebHistory } from "vue-router";
import ChangeDivColor from "./components/ChangeDivColor.vue";

const routes = [
  {
    path: "/changedivcolor",
    name: "changedivcolor",
    components: ChangeDivColor,
  },
  {
    path: "/piniastore",
    name: "piniastore",
    components: () => import("./components/PiniaStore.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    components: () => import("./components/Register.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;

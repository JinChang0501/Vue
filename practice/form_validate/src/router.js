import { createRouter, createWebHistory } from "vue-router";
import ChangeDivColor from "./components/ChangeDivColor.vue";
import AxiosDemo from "./components/AxiosDemo.vue";
const routes = [
  {
    path: "/changedivcolor",
    name: "changedivcolor",
    component: ChangeDivColor,
  },
  {
    path: "/piniastore",
    name: "piniastore",
    component: () => import("./components/PiniaStore.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import("./components/Register.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: AxiosDemo,
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;

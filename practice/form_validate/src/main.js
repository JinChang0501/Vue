import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import App_pinia from "./App_pinia.vue";
import { createPinia } from "pinia";

createApp(App_pinia).use(createPinia()).mount("#app");

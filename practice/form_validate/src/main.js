import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import App_pinia from "./App_pinia.vue";
import App_view from "./App_view.vue";
import router from "./router";
import { createPinia } from "pinia";

createApp(App_view).use(createPinia()).use(router).mount("#app");

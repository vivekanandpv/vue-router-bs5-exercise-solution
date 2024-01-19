import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./color-modes.js";
import { router } from "./routes/routes.js";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");

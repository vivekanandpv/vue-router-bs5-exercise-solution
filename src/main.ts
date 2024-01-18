import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./color-modes.js";
import { router } from "./routes/routes.js";

createApp(App).use(router).mount("#app");

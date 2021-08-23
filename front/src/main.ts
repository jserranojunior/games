import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import slifer from "slifer";
import router from "./router/index";

createApp(App).use(router).use(slifer).mount("#app");

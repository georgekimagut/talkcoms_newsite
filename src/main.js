import { createApp } from "vue";
import "./assets/style/style.css";
import App from "./App.vue";
import router from "./router";
import Button from "./components/ui/button/Button.vue";

createApp(App).component("Button", Button).use(router).mount("#app");

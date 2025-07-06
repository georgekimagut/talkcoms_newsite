import { createApp } from "vue";
import "./assets/style/style.css";
import App from "./App.vue";
import router from "./router";
import Button from "./components/ui/button/Button.vue";
import Input from "./components/ui/input/Input.vue";
import Textarea from "./components/ui/textarea/Textarea.vue";

createApp(App)
  .component("Button", Button, "Input", Input, "Textarea", Textarea)
  .use(router)
  .mount("#app");

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from 'pinia'


const pinia = createPinia()
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import router from "./router";


const app = createApp(App);
app.use(router);
app.use(pinia)
ㄔㄛ

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.mount("#app");

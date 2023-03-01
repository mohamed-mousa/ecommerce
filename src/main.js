import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import "./assets/main.css";
VueChartkick.options = {
    colors: ["#93c5fd"],
};

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(VueChartkick);
app.use(router);

app.mount("#app");

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router/index.js"

const app = createApp(App)
    .use(ElementPlus)
    .use(router);

app.use(createPinia());

app.mount("#app");

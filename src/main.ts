import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import configureToast from "./utils/configure-toast";
import router from "./router";
import { setInitialTheme } from "./utils/theme-preference";
import subscribeToStore from "./utils/store-subscribe";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

subscribeToStore();
setInitialTheme();
configureToast(app);

app.mount("#app");

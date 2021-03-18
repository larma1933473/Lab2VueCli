import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/libs/css/style.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap/js/bootstrap.bundle.js';
import './assets/vendor/fonts/fontawesome/css/fontawesome-all.css';


createApp(App)
  .use(router)
  .mount("#app");

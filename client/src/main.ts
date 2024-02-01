import App from './App.vue'
import { createApp } from 'vue'
import axios from "axios";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from './router'
import './assets/main.css'

axios.defaults.baseURL = "http://localhost:8000/";

const vuetify = createVuetify({
    components,
    directives,
  });

const app = createApp(App)

app.use(router)

app.use(vuetify)

app.mount('#app')
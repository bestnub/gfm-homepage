import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ToastService from 'primevue/toastservice';

import PrimeVue from 'primevue/config';

import "primeflex/primeflex.css";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue, { ripple: true })
    .use(ToastService)
    .mount('#app')

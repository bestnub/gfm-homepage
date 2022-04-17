import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ToastService from 'primevue/toastservice';

import PrimeVue from 'primevue/config';
import TabMenu from 'primevue/tabmenu';

import "primeflex/primeflex.css";

import 'primevue/resources/themes/saga-blue/theme.css';
// import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
// import 'primevue/resources/themes/fluent-light/theme.css';
// import 'primevue/resources/themes/vela-green/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


createApp(App)
    .use(store)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    // .component('InputText', InputText)
    // .component('Button', Button)
    // .component('Checkbox', Checkbox)
    // .component('Menubar', Menubar)
    .component('TabMenu', TabMenu)
    .mount('#app')

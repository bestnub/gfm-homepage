import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Menubar from 'primevue/menubar';
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
    .component('InputText', InputText)
    .component('Button', Button)
    .component('Checkbox', Checkbox)
    .component('Menubar', Menubar)
    .component('TabMenu', TabMenu)
    .mount('#app')

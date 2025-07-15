import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';
import Aura from '@primeuix/themes/aura';
import { Buffer } from 'buffer';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
window.Buffer = Buffer;

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');

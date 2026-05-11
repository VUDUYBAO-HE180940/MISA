import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/style.css';
import './assets/css/components.css';
import { MsButton, MsInput, MsSelect, MsCheckbox, MsRadio, MsPopup, MsTable, MsToast } from './components/Base';

const app = createApp(App);

app.use(router);

// Register base components globally
app.component('MsButton', MsButton);
app.component('MsInput', MsInput);
app.component('MsSelect', MsSelect);
app.component('MsCheckbox', MsCheckbox);
app.component('MsRadio', MsRadio);
app.component('MsPopup', MsPopup);
app.component('MsTable', MsTable);
app.component('MsToast', MsToast);

app.mount('#app');

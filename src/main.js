import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/style.css';
import './assets/css/components.css';
import { MsButton, MsInput, MsSelect, MsCheckbox, MsRadio } from './components/Base';

const app = createApp(App);

// Register base components globally
app.component('MsButton', MsButton);
app.component('MsInput', MsInput);
app.component('MsSelect', MsSelect);
app.component('MsCheckbox', MsCheckbox);
app.component('MsRadio', MsRadio);

app.mount('#app');

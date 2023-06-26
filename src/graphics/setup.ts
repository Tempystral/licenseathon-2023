import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import SetupPage from './pages/SetupPage.vue';

library.add(faMicrophone);
library.add(faTwitch);
library.add(faGamepad);

const app = createApp(SetupPage);
const head = createHead();
app.use(head);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

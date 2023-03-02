import { createHead } from '@vueuse/head';
import { createApp } from 'vue';
import TimerComponent from './components/TimerComponent.vue';

const app = createApp(TimerComponent);
const head = createHead();
app.use(head);
app.mount('#app');

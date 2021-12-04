import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import ElementPlus, { ElCollapseTransition } from 'element-plus';
import App from './App.vue';
import router from './router';
import '@/styles/preflight.scss';
import '@/styles/global.scss';
import 'virtual:windi.css';
import '@/guard';

dayjs.locale('zh-cn');
dayjs.extend(customParseFormat);

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.use(ElementPlus);

app.component(ElCollapseTransition.name, ElCollapseTransition);

app.mount('#app');

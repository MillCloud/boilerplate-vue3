import { createApp } from 'vue';
import { createPinia } from 'pinia';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import browserUpdate from 'browser-update';
import ElementPlus from 'element-plus';
import ElementProComponents from 'element-pro-components';
import { VueQueryPlugin } from 'vue-query';
import { Icon } from '@iconify/vue';
import { vueQueryPluginOptions } from './utils';
import App from './App.vue';
import router from './router';
import '@/styles/preflight.scss';
import '@/styles/global.scss';
import '@/guard';

dayjs.locale('zh-cn');
dayjs.extend(customParseFormat);

browserUpdate({
  required: { e: 79, f: 67, o: 50, s: 12, c: 63 },
  insecure: true,
  unsupported: true,
});

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .use(ElementProComponents)
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .component('v-icon', Icon)
  .mount('#app');

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
// eslint-disable-next-line import/extensions
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import App from './App.vue';
import './styles/global.less';
import 'virtual:windi.css';

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(generatedRoutes),
  scrollBehavior: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
});

const i18n = createI18n({
  locale: 'zh-Hans',
  fallback: 'zh-Hans',
  messages,
});

const app = createApp(App);

app.use(router);

app.use(i18n);

app.mount('#app');

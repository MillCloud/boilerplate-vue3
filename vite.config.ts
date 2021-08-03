import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import TsconfigPaths from 'vite-tsconfig-paths';
import WindiCSS from 'vite-plugin-windicss';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Legacy from '@vitejs/plugin-legacy';
import VueI18n from '@intlify/vite-plugin-vue-i18n';

export default defineConfig({
  plugins: [
    Vue(),
    TsconfigPaths({
      loose: true,
    }),
    WindiCSS(),
    Pages(),
    Layouts(),
    ViteComponents({
      customComponentResolvers: [AntDesignVueResolver(), ViteIconsResolver()],
    }),
    ViteIcons(),
    Legacy(),
    VueI18n({
      include: [path.resolve('src', 'locales', '**')],
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@modyqyw/utils',
      '@vueuse/core',
      '@vueuse/gesture',
      '@vueuse/integrations',
      '@vueuse/motion',
      '@vueuse/router',
      'ant-design-vue',
      'swrv',
    ],
    exclude: ['vue-demi'],
  },
});

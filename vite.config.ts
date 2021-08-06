import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import StyleImport from 'vite-plugin-style-import';
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
    StyleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,
        },
      ],
    }),
    ViteIcons(),
    Legacy(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve('src', 'locales', '**')],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      '@modyqyw/utils',
      '@vueuse/core',
      '@vueuse/gesture',
      '@vueuse/integrations',
      '@vueuse/motion',
      '@vueuse/router',
      'ant-design-vue',
      'swrv',
      'vue',
      'vue-router',
    ],
    exclude: ['vue-demi'],
  },
});

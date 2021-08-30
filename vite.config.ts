import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import TsconfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCSS from 'vite-plugin-windicss';
import Components, { AntDesignVueResolver } from 'vite-plugin-components';
import StyleImport from 'vite-plugin-style-import';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Legacy from '@vitejs/plugin-legacy';
import ESLint from 'vite-plugin-eslint';
import Stylelint from 'vite-plugin-stylelint';
import Inspect from 'vite-plugin-inspect';
import Restart from 'vite-plugin-restart';

export default defineConfig({
  plugins: [
    Vue(),
    TsconfigPaths({
      loose: true,
    }),
    Pages({
      exclude: [
        '**/components/*.js',
        '**/components/*.jsx',
        '**/components/*.ts',
        '**/components/*.tsx',
        '**/components/*.vue',
      ],
    }),
    Layouts(),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve('src', 'locales', '**')],
    }),
    WindiCSS(),
    Components({
      globalComponentsDeclaration: true,
      customComponentResolvers: [AntDesignVueResolver(), IconsResolver()],
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
    Icons({
      defaultClass: 'anticon',
    }),
    Legacy({
      // https://caniuse.com/proxy
      // https://caniuse.com/css-variables
      // https://umijs.org/zh-CN/config#targets
      targets: [
        'edge >= 16',
        'firefox >= 64',
        'chrome >= 49',
        'safari >= 10',
        'android >= 5',
        'ios >= 10',
      ],
    }),
    ESLint({
      fix: true,
    }),
    Stylelint({
      fix: true,
    }),
    // localhost:3000/__inspect
    Inspect(),
    Restart({
      restart: ['windi.config.[jt]s', 'tsconfig.json', 'pnpm-lock.yaml'],
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
      'axios',
      'dayjs',
      'swrv',
      'vue',
      'vue-query',
      'vue-router',
    ],
    exclude: ['vue-demi'],
  },
});

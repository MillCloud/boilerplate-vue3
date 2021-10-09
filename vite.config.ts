import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import TsconfigPaths from 'vite-tsconfig-paths';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import WindiCSS from 'vite-plugin-windicss';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Legacy from '@vitejs/plugin-legacy';
import Env from 'vite-plugin-env-compatible';
import ESLint from 'vite-plugin-eslint';
import Stylelint from 'vite-plugin-stylelint';
import Mkcert from 'vite-plugin-mkcert';
import Inspect from 'vite-plugin-inspect';
import Restart from 'vite-plugin-restart';

export default defineConfig({
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
      'element-plus',
      '@element-plus/icons',
      'moment',
      'naive-ui',
      'vue',
      'vue-query',
      'vue-router',
    ],
    exclude: ['vue-demi'],
  },
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
      dts: true,
      resolvers: [AntDesignVueResolver(), IconsResolver()],
    }),
    Icons({
      compiler: 'vue3',
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
    Env(),
    ESLint({
      fix: true,
    }),
    Stylelint({
      fix: true,
    }),
    Mkcert({
      autoUpgrade: true,
      source: 'coding',
    }),
    // localhost:3000/__inspect
    Inspect(),
    Restart({
      restart: ['windi.config.[jt]s', 'tsconfig.json', 'pnpm-lock.yaml'],
    }),
  ],
  server: {
    https: true,
  },
});

import path from 'path';
// import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import pages from 'vite-plugin-pages';
import layouts from 'vite-plugin-vue-layouts';
import vueComponents from 'unplugin-vue-components/vite';
import icons from 'unplugin-icons/vite';
import iconsResolver from 'unplugin-icons/resolver';
import env from 'vite-plugin-env-compatible';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import compression from 'vite-plugin-compression';
// import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  optimizeDeps: {
    include: [
      '@element-plus/icons-vue',
      '@iconify/vue',
      '@modyqyw/utils',
      '@vueuse/core',
      '@vueuse/integrations',
      '@vueuse/router',
      'axios',
      'dayjs',
      'element-plus',
      'element-pro-components',
      'nprogress',
      'pinia',
      'query-string',
      'vue',
      'vue-query',
      'vue-query/devtools',
      'vue-router',
    ],
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    pages({
      exclude: [
        '**/components/*.js',
        '**/components/*.jsx',
        '**/components/*.ts',
        '**/components/*.tsx',
        '**/components/*.vue',
      ],
    }),
    layouts(),
    vueComponents({
      // dts: 'src/components.d.ts',
      resolvers: [iconsResolver()],
    }),
    icons({
      compiler: 'vue3',
      defaultClass: 'el-icon',
    }),
    env({
      prefix: 'VITE',
    }),
    eslint({
      fix: true,
    }),
    stylelint({
      fix: true,
    }),
    compression(),
    // mkcert({
    //   autoUpgrade: true,
    //   source: 'coding',
    // }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@/': `${path.resolve('src')}/`,
    },
  },
  server: {
    fs: {
      strict: true,
    },
    host: true,
    // https: {
    //   // https://github.com/vitejs/vite/issues/4403
    //   // @ts-ignore
    //   maxSessionMemory: 128,
    // },
  },
});

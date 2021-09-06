<template>
  <a-row>
    <a-col :span="24">
      <h3 class="text-center prose-2xl">{{ msg }}</h3>
    </a-col>
    <a-col :span="24">
      <p class="text-center">
        For a guide and recipes on how to configure / customize this project,
        check out the
        <a
          href="https://cn.vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          vite documentation
        </a>
      </p>
    </a-col>
    <a-col :span="24" class="mt-2">
      <h6 class="text-center prose-lg">Installed Plugins</h6>
    </a-col>
    <a-col :span="24" class="text-center">
      <a
        class="mx-2"
        href="https://github.com/vitejs/vite/tree/main/packages/plugin-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue
      </a>
      <a
        class="mx-2"
        href="https://github.com/aleclarson/vite-tsconfig-paths"
        target="_blank"
        rel="noopener noreferrer"
      >
        tsconfig-paths
      </a>
      <a
        class="mx-2"
        href="https://github.com/hannoeru/vite-plugin-pages"
        target="_blank"
        rel="noopener noreferrer"
      >
        pages
      </a>
      <a
        class="mx-2"
        href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-layouts
      </a>
      <a
        class="mx-2"
        href="https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-i18n
      </a>
      <a
        class="mx-2"
        href="https://github.com/windicss/vite-plugin-windicss"
        target="_blank"
        rel="noopener noreferrer"
      >
        windicss
      </a>
      <a
        class="mx-2"
        href="https://github.com/antfu/unplugin-vue-components"
        target="_blank"
        rel="noopener noreferrer"
      >
        unplugin-vue-components
      </a>
      <a
        class="mx-2"
        href="https://github.com/antfu/unplugin-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        unplugin-icons
      </a>
      <a
        class="mx-2"
        href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        legacy
      </a>
      <a
        class="mx-2"
        href="https://github.com/IndexXuan/vite-plugin-env-compatible"
        target="_blank"
        rel="noopener noreferrer"
      >
        env
      </a>
      <a
        class="mx-2"
        href="https://github.com/gxmari007/vite-plugin-eslint"
        target="_blank"
        rel="noopener noreferrer"
      >
        eslint
      </a>
      <a
        class="mx-2"
        href="https://github.com/ModyQyW/vite-plugin-stylelint"
        target="_blank"
        rel="noopener noreferrer"
      >
        stylelint
      </a>
      <a
        class="mx-2"
        href="https://github.com/antfu/vite-plugin-inspect"
        target="_blank"
        rel="noopener noreferrer"
      >
        inspect
      </a>
      <a
        class="mx-2"
        href="https://github.com/antfu/vite-plugin-restart"
        target="_blank"
        rel="noopener noreferrer"
      >
        restart
      </a>
    </a-col>
    <a-col :span="24" class="mt-2">
      <h6 class="text-center prose-lg">Ecosystem</h6>
    </a-col>
    <a-col :span="24" class="text-center">
      <a
        class="mx-2"
        href="https://cn.vuejs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue
      </a>
      <a
        class="mx-2"
        href="https://router.vuejs.org/zh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-router
      </a>
      <a
        class="mx-2"
        href="https://vueuse.js.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-use
      </a>
      <a
        class="mx-2"
        href="https://github.com/vuejs/vue-devtools"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-devtools
      </a>
      <a
        class="mx-2"
        href="https://2x.antdv.com/index-cn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ant-design-vue
      </a>
      <a
        class="mx-2"
        href="https://kazupon.github.io/vue-i18n/"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-i18n
      </a>
      <a
        class="mx-2"
        href="https://docs-swrv.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        swrv
      </a>
      <a
        class="mx-2"
        href="https://vue-query.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-query
      </a>
      <a
        class="mx-2"
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener noreferrer"
      >
        awesome-vue
      </a>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

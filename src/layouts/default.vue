<template>
  <a-config-provider :locale="antdvLocale">
    <a-layout min-h="screen">
      <a-layout-header
        position="fixed"
        flex="~ col"
        z="10"
        w="full"
        leading="normal"
        items="center"
        justify="center"
        :style="{ padding: '0 12px' }"
      >
        <a-typography-title :level="4" mb="!0" text="center !white">
          {{ name }}
        </a-typography-title>
        <a-typography-text text="!white">v{{ version }}</a-typography-text>
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '64px', padding: '12px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer text="center">
        <a-typography-link
          :href="`https://github.com/${author}/${name}`"
          target="_blank"
        >
          Github
        </a-typography-link>
      </a-layout-footer>
      <a-back-top />
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts" setup>
import pkg from '@@/package.json';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import enUS from 'ant-design-vue/es/locale/en_US';
import 'moment/dist/locale/zh-cn';

const { name, version, author } = pkg;

const { locale } = useI18n({
  locale: 'zh-Hans',
});

const localeMap = {
  'zh-Hans': zhCN,
  'en-US': enUS,
} as Record<string, any>;

const antdvLocale = computed(() => localeMap[locale.value] || zhCN);
</script>

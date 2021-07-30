<template>
  <a-config-provider>
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
        <a-typography-title :level="4" mb="!0" text="!white center">
          {{ pkg.name }}
        </a-typography-title>
        <a-typography-text text="!white">v{{ pkg.version }}</a-typography-text>
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '64px', padding: '12px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer text="center">
        <a-typography-link
          :href="`https://github.com/${pkg.author.name}/${pkg.name}`"
          target="_blank"
        >
          Github
        </a-typography-link>
      </a-layout-footer>
      <a-back-top />
    </a-layout>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import pkg from '@@/package.json';

export default defineComponent({
  setup() {
    return {
      pkg,
    };
  },
});
</script>

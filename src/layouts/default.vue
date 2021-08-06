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
          {{ name }}
        </a-typography-title>
        <a-typography-text text="!white">v{{ version }}</a-typography-text>
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '64px', padding: '12px' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer text="center">
        <a-typography-link
          :href="`https://github.com/${author.name || author}/${name}`"
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

const { name, version, author } = pkg;
</script>

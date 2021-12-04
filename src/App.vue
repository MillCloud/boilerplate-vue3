<template>
  <el-config-provider>
    <router-view />
    <vue-query-dev-tools />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useQueryProvider } from 'vue-query';
import { VueQueryDevTools } from 'vue-query/devtools';
import { queryClient } from '@/utils';

useQueryProvider(queryClient);
</script>

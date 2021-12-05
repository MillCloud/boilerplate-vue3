<template>
  <el-config-provider :locale="zhCn">
    <router-view />
    <vue-query-dev-tools />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useQueryProvider } from 'vue-query';
import { VueQueryDevTools } from 'vue-query/devtools';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { queryClient } from '@/utils';

useQueryProvider(queryClient);
</script>

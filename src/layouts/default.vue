<template>
  <el-container class="relative h-screen bg-gray-100">
    <el-main class="p-20">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta?.keepAlive" :key="$route.name" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta?.keepAlive" :key="$route.name" />
      </router-view>
    </el-main>
    <el-footer class="flex items-center justify-center">
      <v-network />
      <v-version />
    </el-footer>
  </el-container>
</template>

<script setup lang="ts">
import { VNetwork, VVersion } from './components';
</script>

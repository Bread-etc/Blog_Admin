<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';

</script>

<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<style scoped lang="css">
html, body {
  margin: 0;
}

</style>

<script setup lang="ts">
import { NMessageProvider } from 'naive-ui';

</script>

<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
</template>

<style scoped lang="css">

@font-face {
  font-family: 'LXGW WenKai';
  src: url('@fonts/LXGWWenKaiGBScreen.ttf') format('truetype');
}

</style>

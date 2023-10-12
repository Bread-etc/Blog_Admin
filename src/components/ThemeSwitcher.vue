<!-- 主题切换组件 -->
<template>
  <div>
    <n-switch v-model:value="active" size="medium">
      <template #checked-icon>
        <n-icon :component="WeatherMoon16Filled" />
      </template>
      <template #unchecked-icon>
        <n-icon :component="WeatherSunny16Filled" />
      </template>
    </n-switch>
  </div>
</template>

<script lang="ts" setup>
import { NSwitch, NIcon } from "naive-ui";
import { WeatherSunny16Filled, WeatherMoon16Filled } from "@vicons/fluent";
import { ref } from "vue";

const active = ref(false);
</script>

<style lang="css" module></style>

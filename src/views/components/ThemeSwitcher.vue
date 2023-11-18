<!-- 主题切换组件 -->
<template>
  <div class="m-auto">
    <n-switch v-model:value="active" size="large" @change="toggleMode">
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
const toggleMode = () => {
  document.documentElement.classList.toggle("dark", active.value);
};
</script>

<style lang="css" module></style>

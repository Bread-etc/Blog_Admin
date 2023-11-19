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
import { useThemeStore } from "../../store/modules/theme";
import { ref, onMounted } from "vue";

const themeStore = useThemeStore();
const active = ref(themeStore.isDarkTheme);

const toggleMode = () => {
  themeStore.toggleTheme();
};

onMounted(() => {
  // 初始化主题
  themeStore.initTheme();
  // 更新active.value 变量, 使其与当前主题状态保持同步
  active.value = themeStore.isDarkTheme;
})
</script>

<style lang="css" module></style>

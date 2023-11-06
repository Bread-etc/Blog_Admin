<!-- Home.vue for blog_admin -->
<template>
  <n-config-provider :theme="theme">
    <div class="h-screen w-screen flex font-mono box-content" style="font-family: LXGW WenKai">
        <div class="flex flex-col items-center w-40 bg-content-light p-2">
            <p class="p-5 m-0 font-extrabold text-lg">侧边栏</p>
            <SideList></SideList>
        </div>
        <div class="flex flex-col items-center flex-auto bg-dash-light p-2 font-semibold font-sans">
            DashBoard
        </div>
      <!-- <n-card>
        <n-space>
          <n-button @click="theme = lightTheme">
            浅色
          </n-button>
        </n-space>
      </n-card>
      <n-card>
        <n-space>
            <n-button @click="theme = darkTheme">
                深色
            </n-button>
        </n-space>
      </n-card> -->
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
import SideList from "./components/SideList.vue";
import { NConfigProvider, GlobalTheme } from "naive-ui";
import { ref } from "vue";

const theme = ref<GlobalTheme | null>(null);  
</script>

<style lang="scss" module></style>

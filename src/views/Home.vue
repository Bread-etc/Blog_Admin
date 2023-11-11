<!-- Home.vue for blog_admin -->
<template>
  <n-config-provider :theme="theme">
    <div class="h-screen w-screen flex font-mono box-content flex-row" style="font-family: LXGW WenKai">
      <!-- 左侧side -->
        <div class="flex flex-col items-center w-40 bg-content-light p-2 text-slate-100">
            <img src="../assets/images/head_pic.jpg" class=" rounded-full border-solid object-left-bottom h-14 w-14 my-4 drop-shadow-xl" alt="/logo/work">
            <div class="my-2 flex content-center justify-center items-center justify-items-center rounded-lg cursor-default">
              <div class="flex content-center justify-items-center p-2 bg-side-icon rounded-l-lg drop-shadow-2xl">
                <n-icon size="20px">
                  <ClipboardTaskListRtl24Filled />
                </n-icon>
              </div>
              <div class="p-1 px-2 font-mono font-semibold text-base bg-side-block rounded-tr-lg rounded-br-lg rounded-r-lg drop-shadow-2xl" style="font-size: 14px; "> 
                DashBoard
              </div>
            </div>
            <SideList></SideList>
        </div>
        <div class="flex flex-col items-center flex-auto bg-dash-light p-2 font-semibold font-sans">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ClipboardTaskListRtl24Filled } from '@vicons/fluent';
import SideList from "./components/SideList.vue";
import { NConfigProvider, GlobalTheme, NIcon } from "naive-ui";
// import { useRouter } from "vue-router";
import { ref } from "vue";

const theme = ref<GlobalTheme | null>(null);
// const router = useRouter();

</script>

<style lang="scss" module></style>

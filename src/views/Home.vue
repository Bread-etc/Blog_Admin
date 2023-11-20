<!-- Home.vue for blog_admin -->
<template>
  <div class="h-screen w-screen flex font-mono box-content flex-row overflow-x-hidden overflow-y-hidden justify-center" style="font-family: LXGW WenKai">
    <!-- 左侧side -->
      <div class="flex flex-col items-center w-.15 bg-content-light dark:bg-content-dark p-2 text-slate-100">
          <img src="../assets/images/head_pic.jpg" class="rounded-xl border-solid opacity-85 object-left-bottom h-14 w-14 my-4 drop-shadow-xl" alt="/logo/work">
          <div class="my-2 flex content-center justify-center items-center justify-items-center rounded-lg cursor-default mt-2">
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
      <div class="flex flex-col items-center grow bg-dash-light dark:bg-dash-dark p-2 font-semibold font-sans w-.85">
          <!-- 渲染子组件的路由 -->
          <router-view class="router-view-container"></router-view>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { ClipboardTaskListRtl24Filled } from '@vicons/fluent';
import { NIcon } from 'naive-ui';
import SideList from "./components/SideList.vue";


</script>

<style lang="css" module>
.router-view-container {
  width: 100%;
  /* 避免水平溢出 */
  overflow-x: hidden;
}
</style>

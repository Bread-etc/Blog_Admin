<!-- Manage.vue for home.vue -->
<template>
    <div class="flex flex-col items-start w-full"
        style="font-family: LXGW WenKai;">
      <div class="font-extrabold text-lg p-5 m-0 dark:text-white transition-colors duration-300 ease-linear">Management</div>
      <div
        class="flex flex-row flex-nowarp justify-start w-full mx-2"
      >
        <n-button class="rounded-md mx-2 text-md text-black dark:text-white" ghost size="medium" color="#7cc379" @click="directTo('create')">Create</n-button>
        <n-button class="rounded-md mx-2 text-md text-black dark:text-white" ghost size="medium" color="#e68181" @click="directTo('delete')">Delete</n-button>
        <n-button class="rounded-md mx-2 text-md text-black dark:text-white" ghost size="medium" color="#8a2be2" @click="directTo('search')">Search</n-button>
        <n-button class="rounded-md mx-2 text-md text-black dark:text-white" ghost size="medium" color="#ff69b4" @click="directTo('modify')">Modify</n-button>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script lang="ts" setup>
import { NButton, useLoadingBar } from 'naive-ui';
import { useRouter } from 'vue-router';

const loading = useLoadingBar();
// 路由跳转
const router = useRouter();
async function directTo(url: string) {
  await loading.start();
  await router.push(`/home/manage/${url}`);
  await loading.finish();
}

</script>

<style lang="scss" module></style>

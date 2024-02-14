<!-- Analytic.vue for home.vue -->
<template>
  <div
    class="flex flex-col items-start w-full"
    style="font-family: LXGW WenKai"
  >
    <div class="font-extrabold text-lg p-5 m-0 dark:text-white transition-colors duration-300 ease-linear">Data Analytic</div>
    <div class="flex flex-row flex-nowarp justify-between w-full">
      <div
        class="p-5 mx-2 w-1/3 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center justify-items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-green-200 dark:bg-green-900"
        >
          <DrawImage24Filled class="w-5 text-green-400" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          <span class="m-0 text-lg font-medium px-1">文章数:</span>
          {{ article }}
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/3 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-pink-200 dark:bg-pink-800"
        >
          <ChartMultiple24Filled class="w-5 text-pink-400 dark:text-pink-500" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          <span class="m-0 text-lg font-medium px-1">访客数:</span>
          {{ viewers }}
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/3 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-blue-200 dark:bg-blue-400"
        >
          <ApprovalsApp24Filled class="w-5 text-blue-800 dark:text-blue-950" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          <span class="m-0 text-lg font-medium px-1">已运行:</span>
          {{ runTime }} Days
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full py-2">
      <div class="w-3/4 p-5 mx-2 my-3 bg-white dark:bg-content-dark rounded-lg h-full shadow-xl flex flex-col justify-items-center items-center">
        <p class="px-3 m-0 text-base self-start cursor-default dark:text-white transition-colors duration-300 ease-out">Total visits</p>
        <Dataviewer class="-mb-20 -mt-4 dark:text-white"/>
      </div>
      <div class="w-1/4 p-5 mx-2 my-3 bg-white dark:bg-content-dark rounded-lg h-full shadow-xl">
        <p class="px-3 m-0 text-base self-start cursor-default dark:text-white transition-colors duration-300 ease-out">Article Num</p>
        <DataArticle class="-mb-20 -mt-4 dark:text-white" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  DrawImage24Filled,
  ChartMultiple24Filled,
  ApprovalsApp24Filled,
} from "@vicons/fluent";
import Dataviewer from "./DataViewer.vue";
import DataArticle from "./DataArticle.vue";
import { ref, onMounted } from "vue";
// 引入api
import { getArticle } from "../../api/Analytic/getArticle";
import { getDays } from "../../api/Analytic/getDays";

const article = ref<number>(0);
const viewers = ref(7);
const runTime = ref<number>(7);

// 初始化
async function init() {
  try {
    article.value = await getArticle();
    runTime.value = await getDays();
    return {
      article,
      runTime
    };
  } catch (error) {
    console.error("初始化失败...", error);
    return false;
  }
}

onMounted(() => {
  init();
})
</script>

<style lang="scss" module></style>

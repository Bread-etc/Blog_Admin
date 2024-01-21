<!-- Analytic.vue for home.vue -->
<template>
  <div
    class="flex flex-col items-start w-full"
    style="font-family: LXGW WenKai"
  >
    <div class="font-extrabold text-lg p-5 m-0 dark:text-white transition-colors duration-300 ease-linear">Data Analytic</div>
    <div class="flex flex-row flex-nowarp justify-between w-full">
      <div
        class="p-5 mx-2 w-1/4 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center justify-items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-green-200 dark:bg-green-900"
        >
          <DrawImage24Filled class="w-5 text-green-400" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          {{ article }}
          <p class="m-0 text-sm font-medium">文章数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-purple-200 dark:bg-purple-800"
        >
          <Heart24Filled class="w-5 text-purple-600 dark:text-purple-100" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          {{ comments }}
          <p class="m-0 text-sm font-medium">评论数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-pink-200 dark:bg-pink-800"
        >
          <ChartMultiple24Filled class="w-5 text-pink-400 dark:text-pink-500" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          {{ viewers }}
          <p class="m-0 text-sm font-medium">访客数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white dark:bg-content-dark rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full bg-blue-200 dark:bg-blue-400"
        >
          <ApprovalsApp24Filled class="w-5 text-blue-800 dark:text-blue-950" />
        </div>
        <div class="flex-grow px-3 text-lg dark:text-white transition-colors duration-300 ease-out">
          {{ runTime }} Days
          <p class="m-0 text-sm font-medium">已运行</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full">
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
  Heart24Filled,
  ChartMultiple24Filled,
  ApprovalsApp24Filled,
} from "@vicons/fluent";
import Dataviewer from "./DataViewer.vue";
import DataArticle from "./DataArticle.vue";
import { ref } from "vue";

// 后续加入Axios获取
const article = ref(5);
const comments = ref(2);
const viewers = ref(10);
const runTime = ref("356");


</script>

<style lang="scss" module></style>

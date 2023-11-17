<!-- Analytic.vue for home.vue -->
<template>
  <div
    class="flex flex-col items-start w-full"
    style="font-family: LXGW WenKai"
  >
    <div class="font-extrabold text-lg p-5 m-0">Data Analytic</div>
    <div class="flex flex-row flex-nowarp justify-between w-full">
      <div
        class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center justify-items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full"
          style="background-color: #c1f6e4"
        >
          <DrawImage24Filled class="w-5 text-white" style="color: #21e4a2" />
        </div>
        <div class="flex-grow px-3 text-lg">
          {{ article }}
          <p class="m-0 text-sm font-medium">文章数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full"
          style="background-color: #d1d0fd"
        >
          <Heart24Filled class="w-5" style="color: #6251fd" />
        </div>
        <div class="flex-grow px-3 text-lg">
          {{ comments }}
          <p class="m-0 text-sm font-medium">评论数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full"
          style="background-color: #fdd3ea"
        >
          <ChartMultiple24Filled class="w-5" style="color: #fc68b4" />
        </div>
        <div class="flex-grow px-3 text-lg">
          {{ viewers }}
          <p class="m-0 text-sm font-medium">访客数</p>
        </div>
      </div>
      <div
        class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center shadow-md"
      >
        <div
          class="flex justify-center items-center p-3 rounded-full"
          style="background-color: #7f8ef9"
        >
          <ApprovalsApp24Filled class="w-5" style="color: #3446c1" />
        </div>
        <div class="flex-grow px-3 text-lg">
          {{ runTime }} Days
          <p class="m-0 text-sm font-medium">已运行</p>
        </div>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <div class="w-3/4 p-5 mx-2 my-3 bg-white rounded-lg h-full shadow-xl flex flex-col justify-items-center items-center">
        <p class="px-3 m-0 text-base self-start cursor-default">Total visits</p>
        <Dataviewer class="-mb-20 -mt-4"/>
      </div>
      <div class="w-1/4 p-5 mx-2 my-3 bg-white rounded-lg h-full shadow-xl">
        <p class="px-3 m-0 text-base self-start cursor-default">Article Num</p>
        <DataArticle class="-mb-20 -mt-4" />
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

const article = ref(5);
const comments = ref(2);
const viewers = ref(10);
const runTime = ref("356");


</script>

<style lang="scss" module></style>

<!-- Analytic.vue for home.vue -->
<template>
  <div class="flex flex-col items-start w-full" style="font-family: LXGW WenKai;">
    <div class="font-extrabold text-lg  p-5 m-0">Analytic</div>
    <div class="flex flex-row flex-nowarp justify-between w-full">
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center">
          <div class=" flex justify-center items-center p-3 rounded-full" style="background-color: #c1f6e4;">
           <DrawImage24Filled class="w-5 text-white" style="color: #21e4a2;"/>
          </div>
          <div>
            {{ article }}
            <p>文章数量</p>
          </div>
        </div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center">
          <div class=" flex justify-center items-center p-3 rounded-full" style="background-color: #d1d0fd;">
            <Heart24Filled class="w-5" style="color: #6251fd;"/>
          </div>
          <div>
            {{ comments }}
            <p>评论数量</p>
          </div>
        </div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center">
          <div class=" flex justify-center items-center p-3 rounded-full" style="background-color: #fdd3ea;">
            <ChartMultiple24Filled class="w-5" style="color: #fc68b4;"/>
          </div>
          <div>
            {{ viewers }}
            <p>访客数</p>
          </div>
        </div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg flex flex-row items-center">
          <div class=" flex justify-center items-center p-3 rounded-full" style="background-color: #7f8ef9;">
            <ApprovalsApp24Filled class="w-5" style="color: #3446c1;"/>
          </div>
          <div>
            {{ runTime }}
            <p>运行时间</p>
          </div>
        </div>
    </div>
    <div class="flex flex-row w-full">
        <div class="w-1/2 p-5 mx-2 my-5 bg-white rounded-lg">123123</div>
        <div class="w-1/2 p-5 mx-2 my-5 bg-white rounded-lg">456456</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { DrawImage24Filled, Heart24Filled, ChartMultiple24Filled, ApprovalsApp24Filled } from '@vicons/fluent';
import { ref } from 'vue';

const article: number = ref(5);
const comments: number = ref(2);
const viewers: number = ref(10);
const runTime: string = ref('10天3小时')
</script>

<style lang="scss" module></style>

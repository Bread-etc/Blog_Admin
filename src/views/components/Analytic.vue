<!-- Analytic.vue for home.vue -->
<template>
  <div class="flex flex-col items-start w-full" style="font-family: LXGW WenKai;">
    <div class="font-extrabold text-lg  p-5 m-0">Analytic</div>
    <div class="flex flex-row flex-nowarp justify-between w-full">
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg">文章数量</div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg">评论数量</div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg">访客数</div>
        <div class="p-5 mx-2 w-1/4 bg-white rounded-lg">运行时间</div>
    </div>
    <div class="flex flex-row w-full">
        <div class="w-1/2 p-5 mx-2 my-5 bg-white rounded-lg">123123</div>
        <div class="w-1/2 p-5 mx-2 my-5 bg-white rounded-lg">456456</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Heart24Filled } from '@vicons/fluent';
</script>

<style lang="scss" module></style>

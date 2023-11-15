<!-- DataArticle.vue for Analytic.vue -->
<template>
  <div class="text-lg w-full flex" ref="chart"></div>
</template>

<script lang="ts" setup>
import * as charts from "echarts";
import { ref, onMounted } from "vue";

const chart = ref();
function init(){
  const data = charts.init(chart.value, null, {
    height: 300,
  });
};

onMounted(() => {
    init();
})
</script>

<style lang="scss" module></style>

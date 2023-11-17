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

  let option = {
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '30',
            fontWeight: 'bold',
          }
        },
        data: [
          { value: 20, name: '学习'},
          { value: 10, name: '生活'},
          { value: 12, name: '资源'},
          { value: 22, name: '随笔'}
        ],
      }
    ]
  };

  data.setOption(option);
};

onMounted(() => {
    init();
})
</script>

<style lang="scss" module></style>

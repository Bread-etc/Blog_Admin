<!-- Dataviewer.vue for Analytic.vue -->
<template>
  <div class="text-lg flex w-full" ref="chart"></div>
</template>

<script lang="ts" setup>
import * as charts from "echarts";
import { ref, onMounted } from "vue";

const chart = ref();

const init = () => {
  const data = charts.init(chart.value, null, {
    height: 300,
  });

  // 选项
  let option = {
    // 横坐标选项
    xAxis: {
      data: ["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"],
      axisTick: {
        alignWithLabel: true,
      },
    },
    // 纵坐标
    yAxis: {},

    // 真实数据,需要使用Axios从后端应用获取
    series: [
      {
        data: [10, 22, 28, 23, 19, 17, 18],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#f25756",
        },

        // 高亮样式
        emphasis: {
          itemStyle: {
            color: "#f25756",
          },
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          },
        },
      },
    ],
  };
  data.setOption(option);
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" module></style>

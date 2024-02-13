<!-- DataArticle.vue for Analytic.vue -->
<template>
  <div class="text-lg w-full flex" ref="chart"></div>
</template>

<script lang="ts" setup>
// 引入api
import { getTag } from "../../api/Analytic/getTag";
import * as charts from "echarts";
import { ref, onMounted } from "vue";

// 类型
type tagNum = {
  name: string,
  value: number,
}

const chart = ref();

// 初始化函数
function init(tagData: tagNum[]){
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
            fontSize: '20',
            fontWeight: 'bold',
            // {b}代表标签名, {c}代表标签数据的值
            formatter: '{b}' + '\t' + '{c}',
          },
        },
        data: tagData,
      }
    ]
  };

  data.setOption(option);
};

// 获取标签信息
async function getTagAndInit() {
  try {
    const data = await getTag();
    const tagData: tagNum[] = [];

    data.forEach((item) => {
      const newItem = {
        value: item.count,
        name: item.tag
      };
      tagData.push(newItem);
    });

    init(tagData);

  } catch (error) {
    console.error("获取标签信息失败!", error);
    // return [];  // 返回空数组或其他默认值
  }
}

onMounted(() => {
  getTagAndInit();
})
</script>

<style lang="scss" module></style>

<!-- Manage.vue for home.vue -->
<template>
  <div
    class="flex flex-col items-start w-full"
    style="font-family: LXGW WenKai"
  >
    <div
      class="font-extrabold text-lg p-5 m-0 dark:text-white transition-colors duration-300 ease-linear"
    >
      Management
    </div>
    <div class="w-full">
      <div class="table-container mx-2">
        <n-config-provider
          :theme="currentTheme"
        >
          <n-data-table
            :columns="createColumns"
            :striped="true"
            :data="data"
            :pagination="pagination"
            :single-line="false"
            :bordered="true"
          />
        </n-config-provider>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NDataTable, NTag, lightTheme, darkTheme, NConfigProvider } from "naive-ui";
import type { DataTableColumn } from "naive-ui";
import { h, ref } from "vue";

const currentTheme = localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme;

// 表头数据
const createColumns = ref<DataTableColumn<Article>[]>([
  {
    title: 'No',
    key: 'no',
    align: "center",
    width: '50px'
  },
  {
    title: '标题',
    key: 'title'
  },
  {
    title: '浏览量',
    key: 'visit'
  },
  {
    title: '标签',
    key: 'tags',
    // 渲染render
    render(row: Article) {
      const tags = row.tags.map((tagKey: string) => {
        return h(NTag,
          {
            size: 'small',
            type: 'info',
            bordered: false,
            style: { marginRight: '5px' }
          },
          { default: () => tagKey }
        )
      })
      return tags;
    }
  },
  {
    title: '操作',
    key: 'actions',
    // 添加按钮时必须有模板组件,将按钮信息以参数形式传到组件中,在组件中写相关样式
    render(record: Article) {
      return [
        h(NButton, 
        {
          color: "#e68181",
          ghost: false,
          size: 'small',
          style: { marginRight: '10px'},
          // 修改
          onClick: () => reviseData(record)
        },
          { default: () => '修改'}
        ),
        h(NButton,
        {
          color: "#8a2be2",
          ghost: false,
          size: 'small',
          style: { marginRight: '10px'},
          // 删除
          onClick: () => deleteData(record),
        },
          { default: () => '删除'}
        )
      ]
    }
  }
]);

// 文章类型
type Article = {
  no: number,
  title: string,
  visit: string,
  tags: string[]
}


// 表格数据, 利用Axios获取
const data: Article[] = [
  {
    no: 0,
    title: 'the first article',
    visit: '1k',
    tags: ['生活', '日常']
  },
  {
    no: 1,
    title: 'the second article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  },
  {
    no: 2,
    title: 'the third article',
    visit: '1k',
    tags: ['学习']
  }
];

</script>

<style lang="css" module>
.table-container {
  /* 避免水平溢出 */
  overflow-x: hidden;
}
</style>

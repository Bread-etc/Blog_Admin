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
      <div class="m-2">
        <n-button 
          class="dark:text-white" 
          type="success"
          size="large"
          strong
          secondary
          :bordered="true" 
          :ghost="false"
        >
         新增
        </n-button>
      </div>
      <div class="table-container mx-2">
        <n-config-provider :theme="currentTheme">
          <n-data-table
            :columns="createColumns"
            :striped="true"
            :data="data"
            :pagination="pagination"
            :single-line="false"
            :bordered="true"
          />
          <n-modal
            v-model:show="showModal"
            preset="dialog"
            type="success"
            :show-icon="false"
            positive-text="submit"
            negative-text="cancel"
            @positive-click="submitCallback"
            @negative-click="cancelCallback"
          >
            <n-card
              title="修改"
              :bordered="false"
              size="small"
              role="dialog"
              aria-modal="true"
            >
              <n-input
                  v-model:value="title"
                  type="text"
                  placeholder="标题"
                  :show-count="true"
                  style="margin-bottom: 1rem;"
              >
              </n-input>
              <n-input
                v-model:value="img"
                type="text"
                placeholder="图片"
                :show-count="true"
                style="margin-bottom: 1rem;"
              >
              </n-input>
              <n-input
                v-model:value="content"
                type="textarea"
                placeholder="简介"
                :show-count="true"
                style="margin-bottom: 1rem;"
              >
              </n-input>
            </n-card>
          </n-modal>
          <n-modal
            v-model:show="showDelete"
            preset="dialog"
            type="warning"
            content="确认删除?"
            positive-text="delete"
            negative-text="cancel"
            @positive-click="submitDelete"
            @negative-click="cancelDelete"
          >
          </n-modal>
        </n-config-provider>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  NButton,
  NDataTable,
  NTag,
  lightTheme,
  darkTheme,
  NConfigProvider,
  NCard,
  NModal,
  NInput
} from "naive-ui";
import type { DataTableColumn } from "naive-ui";
// Axios 通信
import { reviseInfo } from "../../api/Info/reviseInfo";
import { getData } from "../../api/Info/getData";
import { h, ref, onMounted } from "vue";

const currentTheme =
  localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;

// 表头数据
const createColumns = ref<DataTableColumn<Article>[]>([
  {
    title: "No",
    key: "id",
    align: "center",
    width: "50px",
  },
  {
    title: "标题",
    key: "title",
  },
  {
    title: "标签",
    key: "tag",
    align: 'center',
    width: '50px',
    // 渲染render
    render(row: Article) {
        return h(
          NTag,
          {
            size: "small",
            type: "info",
            bordered: false,
            style: { marginRight: "5px" },
          },
          { default: () => row.tag }
        );
    },
  },
  {
    title: "操作",
    key: "actions",
    width: '300px',
    align: 'center',
    // 添加按钮时必须有模板组件,将按钮信息以参数形式传到组件中,在组件中写相关样式
    render(record: Article) {
      return [
        h(
          NButton,
          {
            color: "#e68181",
            ghost: false,
            size: "small",
            style: { marginRight: "10px" },
            // 修改
            onClick: () => reviseData(record),
          },
          { default: () => "修改" }
        ),
        h(
          NButton,
          {
            color: '#8ac379',
            ghost: false,
            size: 'small',
            style: { marginRight: "10px" },
            // 上传
            onClick: () => uploadData(record),
          },
          { default: () => "上传"}
        ),
        h(
          NButton,
          {
            color: "#8a2be2",
            ghost: false,
            size: "small",
            style: { marginRight: "10px" },
            // 删除
            onClick: () => deleteData(record),
          },
          { default: () => "删除" }
        ),
      ];
    },
  },
]);

// 文章类型
type Article = {
  // No 
  id: number;
  // 文章简介 (可有可无)
  content?: string;
  // tag (标签)
  tag: string;
  // title (标题)
  title: string;
  // img (封面)
  img?: string;
};

// 表格数据, 利用Axios获取
const data: Article[] = [
  {
    id: 1,
    title: "the first article",
    tag: "生活",
  },
  {
    id: 2,
    title: "the second article",
    tag: "学习",
  },
  {
    id: 3,
    title: "the third article",
    tag: "学习",
  },
  {
    id: 4,
    title: "the third article",
    tag: "学习",
  },
  {
    id: 5,
    title: "the third article",
    tag: "学习",
  },
  {
    id: 6,
    title: "the third article",
    tag: "学习",
  }
];

// 模态框及文本框内容
const showModal = ref(false);
const showDelete = ref(false);
const title = ref(null);
const img = ref(null);
const content = ref(null);

// dataTable 中button的方法
// 修改
function reviseData(record: Article) {
  // 开启模态框
  showModal.value = true;
  // 如果没有做修改则直接清空
  title.value = null;
  img.value = null;
  content.value = null;
}

function uploadData(record: Article) {
  console.log("上传成功");
  
}

function deleteData(record: Article) {
  console.log("delete");
  showDelete.value = true;
}

function submitCallback() {}

function cancelCallback() {
  showModal.value = false;
}

function submitDelete() {}

function cancelDelete() {}

onMounted(() => {
  // 开局渲染dataTable数据
  getData();
})
</script>

<style lang="css" module>
.table-container {
  /* 避免水平溢出 */
  overflow-x: hidden;
}
</style>
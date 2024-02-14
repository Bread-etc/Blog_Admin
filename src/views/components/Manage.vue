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
        <n-config-provider :theme="currentTheme" class="flex">
          <n-upload
            action="http://localhost:8080/upload"
            @finish="handleFinish"
            class="w-auto mr-2.5"
          >
            <n-button 
              class="dark:text-white" 
              type="success"
              size="large"
              strong
              secondary
              :bordered="true" 
              :ghost="false"
              >
            上传
            </n-button>
          </n-upload>
          <n-button 
              class="dark:text-white" 
              type="warning"
              size="large"
              strong
              secondary
              :bordered="true" 
              :ghost="false"
              @click="showSong = true"
              >
            切歌
            <n-modal
              v-model:show="showSong"
              preset="dialog"
              type="success"
              :show-icon="false"
              positive-text="保存"
              negative-text="取消"
              @positive-click="submitSong"
              @negative-click="cancelSong"
            >
              <n-card
                title="修改"
                :bordered="false"
                size="small"
                role="dialog"
                aria-modal="true"
              >
                <n-input
                  v-model:value="songLink"
                  type="textarea"
                  placeholder="id(限网易云)"
                  :show-count="true"
                  style="margin-bottom: 1rem;"
                >
                </n-input>
              </n-card>
            </n-modal>
          </n-button>
          </n-config-provider>
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
            positive-text="保存"
            negative-text="取消"
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
                  v-model:value="tag"
                  type="text"
                  placeholder="标签"
                  :show-count="true"
                  style="margin-bottom: 1rem;"
              >
              </n-input>
              <n-input
                v-model:value="image"
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
            positive-text="确定"
            negative-text="取消"
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
  NInput,
  useMessage,
  NUpload,
} from "naive-ui";
import type { DataTableColumn } from "naive-ui";
import type { article } from "../../api/types";
// Axios 通信
import { getData } from "../../api/Info/getData";
import { reviseInfo } from "../../api/Info/reviseInfo";
import { deleteInfo } from "../../api/Info/deleteInfo";
import { getSongLink } from "../../api/Info/getSongLink";
import { reviseSongLink } from "../../api/Info/reviseSongLink";
import { h, ref, reactive, onMounted } from "vue";
import { RowData } from "naive-ui/es/data-table/src/interface";

// 表头数据
const createColumns = ref<DataTableColumn<article>[]>([
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
    render(row: article) {
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
    width: '200px',
    align: 'center',
    // 添加按钮时必须有模板组件,将按钮信息以参数形式传到组件中,在组件中写相关样式
    render(item: article) {
      return [
        h(
          NButton,
          {
            color: "#e68181",
            ghost: false,
            size: "small",
            style: { marginRight: "10px" },
            // 修改
            onClick: () => reviseData(item),
          },
          { default: () => "修改" }
        ),
        h(
          NButton,
          {
            color: "#8a2be2",
            ghost: false,
            size: "small",
            style: { marginRight: "10px" },
            // 删除
            onClick: () => deleteData(item),
          },
          { default: () => "删除" }
        ),
      ];
    },
  },
]);

// 模态框及文本框内容
const showModal = ref(false);
const showDelete = ref(false);
const showSong = ref(false);
const message = useMessage();
let id = ref<number>(0);
let content = ref<string | undefined>('');
let tag = ref<string>('');
let title = ref<string>('');
let image = ref<string | undefined>('');
let alias = ref<string>('');
let songLink = ref<string>('');


// 修改
function reviseData(item: article) {
  showModal.value = true;
  // 初始化
  if (item) {
    id.value = item.id;
    content.value = item.content;
    tag.value = item.tag;
    title.value = item.title;
    image.value = item.image;
    alias.value = item.alias;
  } else {
    message.error("无对象!");
  }
}

function submitCallback() {
  const item: article = {
    id: id.value,
    content: content.value,
    tag: tag.value,
    title: title.value,
    image: image.value,
    alias: alias.value
  }
  // 执行修改信息
  reviseInfo(item)
    .then(() => {
      message.success("已保存");
      // 重新渲染数据
      window.location.reload();
    })
    .catch((error) => {
      // 处理错误
      console.error("保存失败:", error);
      message.error("保存失败: " + error.message);
    });
}

function cancelCallback() {
  showModal.value = false;
  message.warning("撤销保存!");
}

// 删除
function deleteData(item: article) {
  showDelete.value = true;
  // 初始化
  if (item) {
    id.value = item.id;
    content.value = item.content;
    tag.value = item.tag;
    title.value = item.title;
    image.value = item.image;
    alias.value = item.alias;
  } else {
    message.error("无对象!");
  }
}

function submitDelete() {
  const deleteAlias: string = alias.value;
  // 执行删除
  deleteInfo(deleteAlias)
  .then(() => {
    message.success("已删除");
    // 重新渲染数据 (会触发onMounted的内容)
    window.location.reload();
  })
  .catch((error) => {
    // 处理错误
    console.error("删除失败:", error);
    message.error("删除失败: " + error.message); // 显示错误信息
  })
}

function cancelDelete() {
  showDelete.value = false;
  message.warning("撤销删除!");
}

// 切歌
function submitSong() {
  const newSong: string = songLink.value;

  // 执行修改
  reviseSongLink(newSong)
  .then(() => {
    message.success("已保存歌曲");
    window.location.reload();
  })
  .catch((error) => {
    // 处理错误
    console.error("保存失败:", error);
    message.error("保存失败: " + error.message);
  })
}

function cancelSong() {
  showSong.value = false;
  message.warning("撤销切歌!");
}

// 渲染dataTable数据
const data = ref<RowData[]>([]);
async function showData(): Promise<article[]> {
  try {
    const data: article[] = await getData();
    return data;
  } catch (error) {
    throw error;
  }
}

async function fetchData() {
  try {
    const result = await showData();
    const song = await getSongLink();
    data.value = result;
    songLink.value = song;
  } catch (error) {
    console.error("Failed to fetch data", error);
  }
}

// 分页
const pagination = reactive({
  pageSize: 8,
  pageSlot: 8,
  showSizePicker: false,
});


// 上传完成回调
function handleFinish() {
  message.success("文件上传成功!");
  // 上传后刷新页面
  window.location.reload();
}

// 挂载获取数据data
onMounted(() => {
  fetchData();
})

// 当前主题
const currentTheme = localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;

</script>

<style lang="css" module>
.table-container {
  /* 避免水平溢出 */
  overflow-x: hidden;
}
</style>
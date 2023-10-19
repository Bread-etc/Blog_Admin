<!-- Login.vue for blog_admin -->
<template>
  <div
    class="h-screen w-screen flex justify-center items-center font-mono"
    ref="Area"
  >
    <div
      class="flex flex-col items-center w-2/5 p-8 rounded-lg shadow-lg shadow-slate-500 backdrop-blur-2xl"
    >
      <n-icon :size="70" color="#18a058">
        <Code24Filled />
      </n-icon>
      <h2 class="m-0 p-2 text-2xl text-center">Sign in</h2>
      <div class="text-base underline truncate font-semibold">
        Login to start your editing!
      </div>
      <n-form
        class="p-4 text-base font-sans items-center flex justify-center flex-col"
        style="font-family: LXGW WenKai"
        ref="formRef"
        :model="model"
        :rules="rules"
        size="small"
        :show-feedback="false"
        :show-require-mark="false"
      >
        <n-form-item label="账号" path="user.account" class="p-1 w-3/4">
          <n-input v-model:value="model.user.account" placeholder="" />
        </n-form-item>
        <n-form-item label="密码" path="user.password" class="p-1 w-3/4">
          <n-input
            v-model:value="model.user.password"
            type="password"
            placeholder=""
            maxlength="15"
            show-count
          ></n-input>
        </n-form-item>
        <n-form-item class="flex items-center justify-center p-4">
          <n-button
            class="p-4 text-sm font-bold"
            style="font-family: LXGW WenKai; border-radius: 20px;"
            ghost
            type="primary"
            @click="handleLogin"
          >
            <template #icon>
              <n-icon size="24">
                <Fingerprint24Regular />
              </n-icon>
            </template>
            Log in
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import CLOUDS from "vanta/src/vanta.clouds";
import rsa from '../utils/rsa';
import { useAuthStore } from "../store/modules/login";
import { getUserAuth } from "../api/Admin/userAuth";
import { Code24Filled, Fingerprint24Regular } from "@vicons/fluent";
import {
  NIcon,
  NButton,
  FormInst,
  useMessage,
  NForm,
  NFormItem,
  NInput,
} from "naive-ui";
import { onMounted, onBeforeUnmount, ref } from "vue";

// 使用ref引用挂载区域
const Area = ref(null);
let vantaEffect: any = null;

// 在两个生命周期钩子内创建vantaEffect
onMounted(() => {
  vantaEffect = CLOUDS({
    el: Area.value,
    THREE: THREE,
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00
  });
});

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});

// 表单内容
const formRef = ref<FormInst | null>();
const message = useMessage();
const model = ref({
  user: {
    account: null,
    password: null,
  },
});


const rules = {
  user: {
    account: {
      required: true,
      trigger: ["input", "blur"],
    },
    password: {
      required: true,
      message: "请输入密码",
    },
  },
};

// 登录请求
const authStore = useAuthStore();



function handleLogin(event: MouseEvent) {
  event.preventDefault();
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      try {
        // 先使用RSA进行加密
        const encryptedPassword = rsa.rsaPublicData(model.value.user.password);
        // 执行axios发送请求
        const response = await getUserAuth({
          account: model.value.user.account,
          password: encryptedPassword,
        });

        // 处理响应
        if(response) {
          authStore.login();
          message.success("登录成功");
          console.log(response)
        } else {
          console.log(errors);
          message.error("登录失败");
          console.log(response)
        }
      } catch (error) {
        console.error(error);
        message.error("登录失败");
      }
    } else {
      console.log(errors);
      message.error("登录失败");
    }
  });
}
</script>

<style lang="scss" module></style>

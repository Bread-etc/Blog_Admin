<!-- Login.vue for blog_admin -->
<template>
  <div class="h-screen w-screen flex justify-center items-center font-mono" ref="Area">
    <div
      class="flex flex-col items-center w-2/5 p-8 rounded-lg shadow-lg shadow-slate-700 backdrop-blur-2xl"
    >
      <n-icon :size="70">
        <Code24Filled />
      </n-icon>
      <h2 class="m-0 p-2 text-2xl">
        Sign in
      </h2>
      <div class="p-2 text-base">
        Sign in and start your editing!
      </div>
      <n-form 
        class="p-2 text-base"
        ref="formRef"
        :model="model"
        :rules="rules"
        >
        <n-form-item label="account" path="user.account">
          <n-input v-model:value="model.account" placeholder="请输入"></n-input>
        </n-form-item>
        <n-form-item label="password" path="user.password" type="password">
          <n-input v-model:value="model.password" placeholder="请输入"></n-input>
        </n-form-item>
        <n-form-item>
          <n-button 
            class="p-2 text-base font-bold"
            round
            ghost
            type="primary"
            @click="handleValidateButtonClick"
            >
            <template #icon>
              <n-icon size="23">
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
import WAVES from "vanta/src/vanta.waves";
import { Code24Filled, Fingerprint24Regular } from '@vicons/fluent';
import { NIcon, NButton, FormInst, FormItemInst, FormItemRule, FormRules, useMessage } from 'naive-ui';
import { onMounted, onBeforeUnmount, ref } from "vue";

// 使用ref引用挂载区域
const Area = ref(null);
let vantaEffect: any = null;

// 在两个生命周期钩子内创建vantaEffect
onMounted(() => {
  vantaEffect = WAVES({
    el: Area.value,
    THREE: THREE,
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x23d5c,
    shininess: 67.0,
    waveHeight: 20.0,
    waveSpeed: 0.6,
    zoom: 1.3,
  });
});

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
  }
});

// 表单内容
interface ModelType {
  account: string | null
  password: string | null
};

const formRef = ref<FormInst | null>(null);
const message = useMessage();
const model = ref<ModelType>({
  account: null,
  password: null
});
const rules: FormRules = {
  account: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('请填写账号')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ]
};
function handleValidateButtonClick(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if(!errors) {
      message.success('验证成功')
    } else {
      console.log(errors)
      message.error('验证失败')
    }
  })
}
</script>

<style lang="scss" module></style>

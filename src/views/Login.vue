<!-- Login.vue for blog_admin -->
<template>
  <div class="h-screen w-screen flex justify-center items-center font-mono" ref="Area">
    <div
      class="flex flex-col items-center w-2/5 p-8 rounded-lg shadow-lg shadow-slate-700 backdrop-blur-2xl"
    >
      <img src="../../public/admin_logo.svg">
      <h2 class="">
        Sign in
      </h2>
      <div class="">
        Sign in and start your editing!
      </div>
      <div>
        account
      </div>
      <div>
        Password
      </div>
      <button class="">
        Log in
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import WAVES from "vanta/src/vanta.waves";
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
</script>

<style lang="scss" module></style>

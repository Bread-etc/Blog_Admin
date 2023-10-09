<!-- Login.vue for blog_admin -->
<template>
    <div class="h-screen w-screen flex justify-center content-center" ref="Area">
        <div class="flex p-5 justify-center content-center item-center h-96">
            Login page
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import WAVES from 'vanta/src/vanta.waves';
import { onMounted, onBeforeUnmount, ref } from 'vue';

// 使用ref引用挂载区域
const Area = ref(null);
let vantaEffect: any = null;

// 在两个生命周期钩子内创建vantaEffect
onMounted(() => {
    vantaEffect=WAVES({
        el:Area.value,
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x23d5c,
        shininess: 67.00,
        waveHeight: 20.00,
        waveSpeed: 0.60,
        zoom: 1.30
    })
});

onBeforeUnmount(() => {
    if(vantaEffect) {
        vantaEffect.destroy();
    }
})
</script>

<style lang="scss" module>

</style>
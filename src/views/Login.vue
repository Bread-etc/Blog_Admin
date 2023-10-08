<!-- Login.vue for blog_admin -->
<template>
    <div class="h-screen w-screen" ref="Area">
        <div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import * as THREE from 'three';
import CLOUDS from 'vanta/src/vanta.clouds';
import { onMounted, onBeforeUnmount, ref } from 'vue';

// 使用ref引用挂载区域
const Area = ref(null);
let vantaEffect: any = null;

// 在两个生命周期钩子内创建vantaEffect
onMounted(() => {
    vantaEffect=CLOUDS({
        el:Area.value,
        THREE:THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x95cff7,
        cloudColor: 0xc0c9e0,
        sunColor: 0xfb8d00,
        sunGlareColor: 0xff5923,
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
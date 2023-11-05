<!-- SideList for sideGuide -->
<template>
  <div>
    <ul class="flex flex-col m-0 p-0">
      <li v-for="item in guideList" class="list-none p-3 text-center">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

const guideList = [
    {
        name: 'publish',
        url: '/publish',
        icon: '',
    },
    {
        name: 'Management',
        url: '/manage',
        icon: '',
    },
    {
        name: 'Analytics',
        url: '/analytics',
        icon: '',
    },
    {
        name: 'Message',
        url: '/message',
        icon: '',
    },
    {
        name: 'Settings',
        url: '/setting',
        icon: '',
    }
];
</script>

<style lang="scss" module></style>

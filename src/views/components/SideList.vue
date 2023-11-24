<!-- SideList for sideGuide -->
<template>
  <div>
    <ul class="flex flex-col m-0 p-0 mt-5">
      <li v-for="item in guideList" class="list-none m-3 text-gray-400 flex flex-row justify-item-center items-center text-base font-bold cursor-pointer hover:text-gray-500 dark:hover:text-white" id="item-li"  @click="directTo(item.url)">
        <n-icon v-html="item.icon" size="24px" depth="2" class="mr-1.5 flex dark:text-white" style="margin-top: 6px;"></n-icon>
        {{ item.name }}
      </li>
    </ul>
    <div class="flex flex-row m-0 p-0 mt-5 items-center justify-items-center">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeSwitcher from './ThemeSwitcher.vue';
import { useRouter } from 'vue-router';
import { NIcon } from 'naive-ui';

const guideList = [
    {
      name: 'manage',
      url: '/manage',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm3.328 12.22c-.08.12-.166.235-.258.344l-.142.161l-3.944 5.211c.333.042.672.064 1.016.064a7.969 7.969 0 0 0 5.225-1.942l-1.898-3.837zm-3.889 1.798l-6.358.001a8.031 8.031 0 0 0 3.817 3.357l2.541-3.358zm8.307-6.026l-4.28-.001l.066.13c.04.075.078.152.114.23l3.01 6.09A7.963 7.963 0 0 0 20 12c0-.694-.088-1.367-.254-2.008zM5.042 8.05A7.963 7.963 0 0 0 4 12c0 .697.09 1.374.257 2.018h4.282l-.058-.088l-3.44-5.88zM12 10c-.64 0-1.21.3-1.576.769l-.101.17a.996.996 0 0 1-.089.126a2 2 0 0 0 3.165 2.364l.163-.214c.035-.047.074-.09.116-.129A2 2 0 0 0 12 10zm0-6c-2.204 0-4.2.891-5.647 2.333l2.164 3.699c.077-.136.16-.266.252-.39l3.38-5.64L12 4zm2.283.33L12.09 7.992h6.834a8.02 8.02 0 0 0-4.64-3.66z" fill="currentColor"></path></g></svg>',     },
    {
        name: 'analytic',
        url: '/analytic',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M5.25 4.25a1 1 0 0 0-2 0v14a2.5 2.5 0 0 0 2.5 2.5h14a1 1 0 1 0 0-2h-14a.5.5 0 0 1-.5-.5v-14zM14 7a1 1 0 0 1 1-1h4.502a1 1 0 0 1 1 1l-.002 4.5a1 1 0 1 1-2 0V9.414l-4.543 4.543a1 1 0 0 1-1.414 0l-1.793-1.793l-2.543 2.543a1 1 0 0 1-1.414-1.414l3.25-3.25a1 1 0 0 1 1.414 0l1.793 1.793L17.086 8H15a1 1 0 0 1-1-1z" fill="currentColor"></path></g></svg>',
    }
];

// 路由跳转
const router = useRouter();
function directTo(url: string) {
  router.push(`/home${url}`);
};



</script>

<style lang="css" scoped>
#item-li {
  position: relative;
}

#item-li:hover {
  /* color: #474747; */
  transition: color 0.5s ease-out;
}

#item-li::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 28%;
  width: 0;
  height: 3px;
  background-color: #483ffd;
  transform-origin: 100% 50%;
  transition: width 0.5s ease-out;
}

#item-li:hover::before {
  width: 65%;
}
</style>

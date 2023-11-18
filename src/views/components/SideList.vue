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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M10.14 2.006c.707 0 1.11.704 1.11 1.411V7.75h-.895a2 2 0 1 0 0 1.5h.895v10.898c0 .596-.252 1.189-.783 1.46a3.399 3.399 0 0 1-1.56.388c-1.51 0-2.633-.764-3.356-1.668a5.171 5.171 0 0 1-1.02-2.137a3.447 3.447 0 0 1-1.269-.69C2.552 16.89 2 15.91 2 14.466c0-.755.054-1.413.19-1.966H6.4c.678 0 1.24.5 1.335 1.151a2 2 0 1 0 1.507-.009A2.85 2.85 0 0 0 6.4 11H3.04a2.036 2.036 0 0 1 .495-.302a4.893 4.893 0 0 1-.178-1.127c-.033-.735.077-1.5.295-2.181c.216-.67.558-1.323 1.038-1.774a2.122 2.122 0 0 1 1.096-.567c.199-.84.706-1.534 1.353-2.037c.831-.648 1.92-1.006 3-1.006zM12.75 17h1.65a2.85 2.85 0 0 0 2.85-2.85v-1.795a2 2 0 1 0-1.5 0v1.795a1.35 1.35 0 0 1-1.35 1.35h-1.65V8.507V8.5V3.417c0-.707.403-1.411 1.11-1.411c1.082 0 2.17.358 3.001 1.006c.647.503 1.154 1.198 1.353 2.037c.42.07.794.284 1.096.567c.48.451.822 1.103 1.038 1.774c.218.681.328 1.446.295 2.181c-.017.376-.072.76-.178 1.127l.066.03c.37.174.67.447.894.81c.425.685.575 1.671.575 2.928c0 1.445-.552 2.426-1.262 3.035a3.447 3.447 0 0 1-1.27.69a5.172 5.172 0 0 1-1.019 2.137c-.723.904-1.846 1.668-3.357 1.668a3.399 3.399 0 0 1-1.56-.387c-.53-.272-.782-.865-.782-1.461V17zM8 8.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0zm.5 6.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1zm7.5-4.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0z" fill="currentColor"></path></g></svg>',
    },
    {
        name: 'analytic',
        url: '/analytic',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M5.25 4.25a1 1 0 0 0-2 0v14a2.5 2.5 0 0 0 2.5 2.5h14a1 1 0 1 0 0-2h-14a.5.5 0 0 1-.5-.5v-14zM14 7a1 1 0 0 1 1-1h4.502a1 1 0 0 1 1 1l-.002 4.5a1 1 0 1 1-2 0V9.414l-4.543 4.543a1 1 0 0 1-1.414 0l-1.793-1.793l-2.543 2.543a1 1 0 0 1-1.414-1.414l3.25-3.25a1 1 0 0 1 1.414 0l1.793 1.793L17.086 8H15a1 1 0 0 1-1-1z" fill="currentColor"></path></g></svg>',
    },
    {
        name: 'message',
        url: '/message',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2zm3.328 12.22c-.08.12-.166.235-.258.344l-.142.161l-3.944 5.211c.333.042.672.064 1.016.064a7.969 7.969 0 0 0 5.225-1.942l-1.898-3.837zm-3.889 1.798l-6.358.001a8.031 8.031 0 0 0 3.817 3.357l2.541-3.358zm8.307-6.026l-4.28-.001l.066.13c.04.075.078.152.114.23l3.01 6.09A7.963 7.963 0 0 0 20 12c0-.694-.088-1.367-.254-2.008zM5.042 8.05A7.963 7.963 0 0 0 4 12c0 .697.09 1.374.257 2.018h4.282l-.058-.088l-3.44-5.88zM12 10c-.64 0-1.21.3-1.576.769l-.101.17a.996.996 0 0 1-.089.126a2 2 0 0 0 3.165 2.364l.163-.214c.035-.047.074-.09.116-.129A2 2 0 0 0 12 10zm0-6c-2.204 0-4.2.891-5.647 2.333l2.164 3.699c.077-.136.16-.266.252-.39l3.38-5.64L12 4zm2.283.33L12.09 7.992h6.834a8.02 8.02 0 0 0-4.64-3.66z" fill="currentColor"></path></g></svg>',
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

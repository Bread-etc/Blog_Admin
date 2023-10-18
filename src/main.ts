import { createApp } from 'vue'
import "tailwindcss/tailwind.css"
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 引入RSA加密解密方法
import Rsa from "./utils/rsa";
App.prototype.Rsa = Rsa;    // 将Rsa注册为公共方法,方便其他页面调用

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')

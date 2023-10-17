// 用于管理登录状态
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLogin: false,
    }),
    actions: {
        // 登录
        login() {
            this.isLogin = true;
        },
        // 登出
        logout() {
            this.isLogin = false;
        }
    }
}) 
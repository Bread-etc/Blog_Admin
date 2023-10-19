// 用于管理登录状态 (存入到localStorage中)
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // 是否登录
        isLogin: false,
        // 是否授权通过
        authState: false,
    }),
    actions: {
        // 登录
        login() {
            this.isLogin = true;

        },
        // 登出
        logout() {
            this.isLogin = false;
        },
    }
})
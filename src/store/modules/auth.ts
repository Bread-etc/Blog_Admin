// 用于管理登录状态 (存入到sessionStorage中)
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // 是否授权 (初始为 false)
        authState: false
    }),
    actions: {
        // 初始化 sessionStorage
        initAuth() {
            const state = sessionStorage.getItem("isLogin");
            // 如果没有这个值就初始化
            if (state === null) {
                sessionStorage.setItem("isLogin", this.authState.toString());
            }
        },
        // 登录
        login() {
            this.authState = true;
            sessionStorage.setItem("isLogin", this.authState.toString());
        },
        // 登出
        logout() {
            this.authState = false;
            sessionStorage.setItem("isLogin", this.authState.toString());
        },
    }
})
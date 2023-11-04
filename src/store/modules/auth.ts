// 用于管理登录状态 (存入到sessionStorage中)
import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        // 是否授权 (初始为 ''和 false)
        token: '',
        authState: false
    }),
    actions: {
        // 初始化 localStorage 
        initAuth() {
            const isLogin = localStorage.getItem("isLogin");
            const token = localStorage.getItem("token");
            // 如果没有这个值就初始化
            if (token === null && isLogin === null) {
                localStorage.setItem("token", this.token);
                localStorage.setItem("isLogin", false.toString());
            }
        },
        // 登录
        login(newToken: string) {
            this.token = newToken;
            localStorage.setItem("token", this.token);
            localStorage.setItem("isLogin", true.toString());
        },
        // 登出
        logout() {
            this.token = '';
            localStorage.setItem("token", this.token);
            localStorage.setItem("isLogin", false.toString());
        },
    }
})
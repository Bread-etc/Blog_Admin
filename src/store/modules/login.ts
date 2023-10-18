// 用于管理登录状态
import { defineStore } from "pinia";
import { getUserAuth } from "../../api/Admin/userAuth";


export const useAuthStore = defineStore('auth', {
    state: () => ({
        // 是否登录
        isLogin: false,
        // 是否授权通过
        authState: false,
        // 保存公钥
        publicKey: '',
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
        async fetchUserAuth(query: Object) {
            const response = await getUserAuth(query);
            console.log(response);
        },
    }
})
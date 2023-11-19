// 用于管理深色模式
import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        // 主题 (默认为light)
        theme: 'light'
    }),
    getters: {
        // 为dark的时候是 true, 为其他的时候就是 false
        isDarkTheme: (state) => state.theme === 'dark'
    },
    actions: {
        // 初始化 localStorage
        initTheme() {
            const theme = localStorage.getItem("theme");
            // 如果本地存储中没有主题设置, 则使用默认值light
            this.theme = theme || 'light';
            document.documentElement.classList.toggle("dark", this.isDarkTheme);
        },

        // 改变主题
        toggleTheme() {
            this.theme = this.isDarkTheme ? "light" : "dark";
            localStorage.setItem("theme", this.theme);
            document.documentElement.classList.toggle("dark", this.isDarkTheme);
        },
    }
})
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录'
        },
        component: () => import("../views/Login.vue")
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            title: '管理',
            requiresAuth: true,
        },
        component: () => import("../views/Admin.vue")
    }
];

// 定义路由器
const router = createRouter({
    // 使用HTML5，需要在服务器下使用
    history: createWebHistory(),
    routes,
});

export default router;
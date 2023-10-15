import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录'
        },
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: '管理'
        },
        component: Home
    }
];

// 定义路由器
const router = createRouter({
    // 使用HTML5，需要在服务器下使用
    history: createWebHistory(),
    routes,
});

// 注册全局前置守卫
// router.beforeEach((to, from, next) => {
//     // if(isLogin) {
//     //     next()
//     // } else {
//     //     next({ name: 'Home' })
//     // }
// });

export default router;
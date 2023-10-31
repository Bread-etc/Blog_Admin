import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/login'
    },
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
        alias: '/admin',
        meta: {
            title: '管理',
            // 需要鉴权
            requiresAuth: true,
        },
        component: Home
    },
];

// 定义路由器
const router = createRouter({
    // 使用HTML5，需要在服务器下使用
    history: createWebHistory(),
    routes,
});

// 全局路由守卫
router.beforeEach((to, _from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const isLoginString = sessionStorage.getItem("isLogin");
    const isLogin = isLoginString !== null ? JSON.parse(isLoginString) : false;

    if (requiresAuth && !isLogin) {
        // 需要登录但用户未登录
        next('/login');
    } else {
        next();
    }
})

export default router;
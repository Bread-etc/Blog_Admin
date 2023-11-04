import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    alias: "/admin",
    meta: {
      title: "管理",
    },
    component: Home,
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
  const isLoginString = localStorage.getItem("isLogin");
  const isLogin = isLoginString !== null ? JSON.parse(isLoginString) : false;
  const token = localStorage.getItem("token");

  if (to.path !== "/login" && (!isLogin || !token)) {
    // 重定向至 /login
    next("/login");
  } else {
    next();
  }
});

export default router;

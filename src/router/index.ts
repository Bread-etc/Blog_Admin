import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import Manage from "../views/components/Manage.vue";
import Analytic from "../views/components/Analytic.vue";

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
    redirect: "/home/manage",
    meta: {
      title: "管理",
    },
    component: Home,
    children: [
      {
        path: "/home/manage",
        name: "Manage",
        meta: {
          title: "管理",
        },
        component: Manage
      },
      {
        path: "/home/analytic",
        name: "Analytic",
        meta: {
          title: "分析",
        },
        component: Analytic,
      }
    ],
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
  };
});


export default router;

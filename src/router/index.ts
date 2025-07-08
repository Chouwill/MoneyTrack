import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/index",
    name: "Index",
    component: () => import("../page/Index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../page/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../page/Register.vue"),
  },
  {
    path: "/adminPanel",
    name: "AdminPanel",
    component: () => import("../page/AdminPanel.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

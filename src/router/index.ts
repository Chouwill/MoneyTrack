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
    component: () => import('../page/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

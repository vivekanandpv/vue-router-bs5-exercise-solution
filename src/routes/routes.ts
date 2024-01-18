import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../components/Home.vue"),
      alias: "/home",
    },
    {
      path: "/news",
      component: () => import("../components/News.vue"),
    },
    {
      path: "/contact",
      component: () => import("../components/Contact.vue"),
    },
    {
      path: "/about",
      component: () => import("../components/About.vue"),
    },
    {
      path: "/form",
      component: () => import("../components/Form.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../components/NotFound.vue"),
    },
  ],
});

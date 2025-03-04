import { createRouter, createWebHistory } from "vue-router";
import Contador from "@/modules/contador/components/Contador.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/contador",
    name: "contador",
    component: Contador
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Contador from "@/modules/contador/components/Contador.vue";
import ListaDeTareas from "@/modules/listaDeTareas/components/ListaDeTareas.vue";
import RegistroView from "@/modules/registro/views/RegistroView.vue";

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
  {
    path: "/lista-de-tareas",
    name: "Lista De Tareas",
    component: ListaDeTareas
  },
  {
    path: "/registrar",
    name: "Registrar",
    component: RegistroView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

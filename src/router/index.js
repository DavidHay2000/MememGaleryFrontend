import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import GalleriesView from "../views/Galleries.vue";
import RegistrationView from "../views/RegistrationView.vue";
import Photos from "../views/Photos.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Photos",
      component: Photos,
    },
    {
      path: "/galleries",
      name: "GalleriesView",
      component: GalleriesView,
    },
    {
      path: "/registration",
      name: "RegistrationView",
      component: RegistrationView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
  ],
});

export default router;

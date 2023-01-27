import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import LoginLayout from '@/views/login/LoginLayout.vue'
import Login from "@/views/login/Login.vue";
import Otp from "@/views/login/Otp.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/otp',
          name: 'Otp',
          component: Otp
        },
      ]
    },
  ],
});

export default router;

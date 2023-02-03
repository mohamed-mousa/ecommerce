import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth'
import Home from "@/views/Home.vue";
import Login from "@/views/login/Login.vue";
import ProfileNoAds from "@/views/profile/ProfileNoAds.vue";
import ProfileWithAds from "@/views/profile/ProfileWithAds.vue";
import ProfileGolden from "@/views/profile/ProfileGolden.vue";
import Otp from "@/views/login/Otp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'Home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/otp',
      name: 'Otp',
      component: Otp,
      beforeEnter(to, from, next) {
        const store = useAuthStore()
        if (store.phoneNumber) {
          next();
        } else {
          next({ name: 'Login' })
        }
      }
    },
    {
      path: '/profile-no-ads',
      name: 'ProfileNoAds',
      component: ProfileNoAds
    },
    {
      path: '/profile-with-ads',
      name: 'ProfileWithAds',
      component: ProfileWithAds
    },
    {
      path: '/profile-golden',
      name: 'ProfileGolden',
      component: ProfileGolden
    }
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth'
import Home from "@/views/Home.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import ProfileNoAds from "@/views/profile/ProfileNoAds.vue";
import ProfileWithAds from "@/views/profile/ProfileWithAds.vue";
import ProfileGolden from "@/views/profile/ProfileGolden.vue";
import Otp from "@/views/auth/Otp.vue";

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
      meta: { notRequiresAuth: true },
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      meta: { notRequiresAuth: true },
      component: Register
    },
    {
      path: '/otp',
      name: 'Otp',
      meta: { requiresAuth: true },
      component: Otp,

    },
    {
      path: '/profile-no-ads',
      name: 'ProfileNoAds',
      meta: { requiresAuth: true },
      component: ProfileNoAds
    },
    {
      path: '/profile-with-ads',
      name: 'ProfileWithAds',
      meta: { requiresAuth: true },
      component: ProfileWithAds
    },
    {
      path: '/profile-golden',
      meta: { requiresAuth: true },
      name: 'ProfileGolden',
      component: ProfileGolden,
      beforeEnter(to, from, next) {
        const store = useAuthStore()
        if (store.user.membership == 'golden') {
          next();
        } else {
          next({ name: 'ProfileNoAds' })
        }
      }
    }
  ],
});


router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if (to.meta.requiresAuth && !store.user.phone) {
    next({ name: 'Login' })
  } else if (store.user.phone && to.meta.notRequiresAuth) {
    next({ name: 'ProfileNoAds' })
  } else {
    next()
  }

})

export default router;

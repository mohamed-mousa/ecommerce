<script setup>
import Ad from "@/components/Ad.vue";
import { useAdStore } from "@/stores/ads";
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const ads = useAdStore().ads;
</script>

<template>
  <main>
    <div
      class="mx-auto flex max-w-4xl items-center justify-between px-5 py-5 md:py-8"
    >
      <router-link
        to="/"
        class="flex items-center justify-center font-extrabold text-teal-500 focus:outline-none focus-visible:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-9 w-9 rounded-full bg-teal-50 p-2 md:h-11 md:w-11"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>

        <span class="ml-4">Home</span>
      </router-link>

      <span
        v-if="store.user"
        @click="store.logout()"
        class="group flex cursor-pointer items-center focus:outline-none focus-visible:outline-none"
      >
        <span
          class="mr-2 hidden text-xl text-teal-500 text-opacity-80 group-hover:text-opacity-100 xl:inline"
          >Logout</span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-8 w-8 fill-teal-500"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <section class="mx-auto mt-4 max-w-2xl px-5 py-5 md:mt-0 md:py-6">
      <article class="mb-12">
        <h1
          class="mb-3 text-4xl font-extrabold capitalize text-teal-700 md:text-5xl"
        >
          My Profile
        </h1>
        <p class="mb-6 text-xl font-semibold text-gray-400">
          Your ads will be shown under your profile
        </p>

        <div
          class="relative mb-4 flex w-full max-w-sm items-start justify-start rounded-2xl bg-teal-50 p-4"
        >
          <div class="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="h-16 w-16 fill-slate-500"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div>
            <div class="flex w-48 justify-between sm:w-60">
              <h2
                class="font-extrabold capitalize text-gray-800 sm:text-lg md:text-xl"
              >
                {{ store.user.name }}
              </h2>

              <span class="font-extrabold text-teal-700">Edit</span>
            </div>
            <p class="mb-4 text-base font-bold text-gray-700 text-opacity-50">
              {{ store.user.phone }}
            </p>
            <div>
              <span
                class="mr-4 rounded bg-gradient-to-r from-red-400 to-red-500 py-1 px-2 text-center font-bold uppercase text-white"
              >
                {{ store.user.membership }}
              </span>
              <router-link
                to="/membership"
                class="font-extrabold text-teal-700 hover:text-teal-900"
                >Upgrade</router-link
              >
            </div>
          </div>
        </div>
      </article>

      <article>
        <h1 class="mb-3 text-2xl font-extrabold capitalize text-black">
          My ads
        </h1>

        <div class="relative mb-4 w-full max-w-2xl">
          <Ad
            :data="ads.slice(0, 3)"
            :showEdit="true"
            :showPromotion="true"
            :showStatus="true"
            :showDate="false"
          />
        </div>
      </article>
    </section>
  </main>
</template>

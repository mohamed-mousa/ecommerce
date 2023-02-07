<script setup>
import Input from "@/components/Input.vue";
import Ad from "@/components/Ad.vue";
import { useCategoryStore } from "@/stores/categories";
import { useAdStore } from "@/stores/ads";
const categories = useCategoryStore().categories;
const ads = useAdStore().ads;
</script>

<template>
  <main class="bg-emerald-500 p-3 lg:flex lg:p-0">
    <!-- Welcome  -->
    <section
      class="min-h-screen bg-emerald-500 pt-5 lg:w-7/12 lg:justify-center lg:p-8 lg:pt-20"
    >
      <!-- page title -->
      <article class="mx-auto mb-8 max-w-2xl">
        <div class="mb-4 flex items-center justify-between">
          <h1 class="text-5xl font-semibold text-white md:text-6xl">Welcome</h1>
          <router-link
            :to="{ name: 'Login' }"
            class="group flex items-center focus:outline-none focus-visible:outline-none"
          >
            <span
              class="mr-2 hidden text-xl text-white text-opacity-80 group-hover:text-opacity-100 xl:inline"
              >Login</span
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              class="h-8 w-8"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </div>
        <p class="text-xl text-white text-opacity-80">
          The largest market place in sudan
        </p>
      </article>

      <!-- search input -->
      <article class="mx-auto mb-8 max-w-2xl">
        <div class="relative h-16 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            class="absolute left-5 top-1/2 h-8 w-8 -translate-y-1/2 opacity-50"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>

          <Input
            type="search"
            placeholder="Search"
            class="border-transparent bg-emerald-700 bg-opacity-70 pl-16 text-xl text-white placeholder:text-white placeholder:text-opacity-70"
          />
        </div>
      </article>

      <!-- categories -->
      <article class="mx-auto mb-8 max-w-2xl">
        <div
          class="mb-3 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="category in categories"
            class="group cursor-pointer rounded-2xl border-2 border-transparent bg-emerald-600 bg-opacity-60 py-5 px-2 text-center text-white transition-all duration-500 hover:border-emerald-800 hover:bg-emerald-700 hover:bg-opacity-100 hover:shadow-xl"
          >
            <img
              :src="category.image"
              loading="lazy"
              :alt="category.name"
              width="30"
              height="30"
              class="mx-auto mb-2 h-10 w-11 transition-all duration-700 group-hover:scale-150"
            />
            <h2 class="mb-1 text-lg font-bold capitalize text-white">
              {{ category.name }}
            </h2>
            <p class="text-sm font-bold text-white text-opacity-50">
              {{ category.count }}
            </p>
          </div>
        </div>

        <button
          type="button"
          class="flex w-full items-center justify-center rounded-2xl border-2 border-transparent bg-emerald-600 bg-opacity-60 py-5 px-2 text-center text-lg font-bold text-white transition-all duration-500 hover:border-emerald-800 hover:bg-emerald-700 hover:bg-opacity-100 hover:shadow-xl focus:outline-none focus-visible:outline-none"
        >
          Browse all ads
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="ml-3 h-7 w-7"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </article>

      <!-- post or become a member -->
      <article class="mx-auto mb-8 max-w-2xl">
        <p
          class="mb-5 text-center text-xl text-white text-opacity-80 sm:text-left"
        >
          Do you have something to sell ?
        </p>

        <div
          class="flex flex-col items-center justify-center sm:flex-row sm:justify-between"
        >
          <button
            type="button"
            class="focus-visible:outline-bl w-72 rounded-2xl border-2 border-[#5ABA81] bg-gradient-to-r from-yellow-500 to-yellow-200 py-3 px-8 text-center font-bold text-black ring-neutral-900 transition-all duration-500 hover:border-yellow-600 hover:to-yellow-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
          >
            Post an ad
          </button>

          <span class="text-xl text-white">or</span>

          <a href="#" class="flex items-center text-xl text-white"
            >Become a member
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="ml-3 h-7 w-7 fill-teal-800"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </article>
    </section>

    <!-- cars -->
    <section
      class="min-h-screen rounded-lg bg-white px-4 pt-5 shadow-2xl lg:w-5/12 lg:rounded-l-[40px] lg:rounded-r-none xl:pt-8 2xl:px-8"
    >
      <!-- title -->
      <article class="mx-auto mb-5 xl:mb-8">
        <div class="flex justify-between">
          <h3 class="text-xl font-bold text-gray-500">Resent ads</h3>
          <a
            href="#"
            class="flex items-center text-lg text-emerald-300 hover:text-emerald-500 focus:outline-none focus-visible:outline-none"
            >See all
          </a>
        </div>
      </article>

      <!-- ads -->
      <article class="mx-auto mb-8">
        <Ad :data="ads.slice(0, 4)" />
      </article>
    </section>
  </main>
</template>

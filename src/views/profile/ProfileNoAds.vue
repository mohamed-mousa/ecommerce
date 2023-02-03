<script setup></script>

<template>
  <main>
    <div class="mx-auto flex max-w-4xl justify-between px-5 py-5 md:py-8">
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
    </div>
    <div class="mx-auto mt-10 max-w-xl px-5 py-5 md:mt-32 md:py-8">
      <h1 class="mb-3 text-5xl font-extrabold capitalize text-teal-700">
        My Profile
      </h1>
      <p class="mb-6 text-xl font-semibold text-gray-400">
        Your ads will be shown under your profile
      </p>

      <div
        class="relative mb-4 flex w-full max-w-sm items-start justify-start rounded-2xl bg-teal-50 p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="mr-3 h-12 w-12 fill-slate-500"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            clip-rule="evenodd"
          />
        </svg>

        <div>
          <div class="flex w-60 justify-between">
            <h2
              class="font-extrabold capitalize text-gray-800 sm:text-lg md:text-xl"
            >
              Bertha Allison
            </h2>

            <h3 class="font-extrabold text-teal-700">Edit</h3>
          </div>
          <p class="text-base font-bold text-gray-700 text-opacity-50">
            (401) 238-8840
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

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

      <router-link
        to="/profile-with-ads"
        class="rounded-lg border-2 border-teal-500 px-2 py-1 font-extrabold text-teal-500 hover:border-teal-700"
        >Show Profile with Ads</router-link
      >
    </div>
    <section class="mx-auto mt-8 max-w-xl px-5 py-5 md:mt-12 md:py-8">
      <article class="mb-12">
        <h1 class="mb-3 text-5xl font-extrabold capitalize text-teal-700">
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
                Bertha Allison
              </h2>

              <span class="font-extrabold text-teal-700">Edit</span>
            </div>
            <p class="mb-4 text-base font-bold text-gray-700 text-opacity-50">
              (401) 238-8840
            </p>
            <div>
              <span
                class="mr-4 rounded bg-gradient-to-r from-red-400 to-red-500 py-1 px-2 text-center font-bold text-white"
              >
                Free
              </span>
              <router-link
                to="/profile-golden"
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

        <div
          class="relative mb-4 flex w-full max-w-lg items-start justify-start rounded-2xl border-[3px] border-orange-200 p-4"
        >
          <div class="mr-3 text-orange-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-12 w-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div>
            <h2
              class="font-extrabold capitalize text-gray-800 sm:text-lg md:text-xl"
            >
              Post an ads
            </h2>
            <p class="text-base font-bold text-gray-700 text-opacity-50">
              You don't have any posted ads to show at this moment
            </p>
            <p class="mb-4 text-base font-bold text-gray-700 text-opacity-50">
              Start posting your ads and sell your items
            </p>
            <button
              type="button"
              class="focus-visible:outline-bl w-48 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-200 py-3 px-8 text-center font-bold text-black ring-neutral-900 transition-all duration-500 hover:border-yellow-600 hover:to-yellow-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
            >
              Post an ad
            </button>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

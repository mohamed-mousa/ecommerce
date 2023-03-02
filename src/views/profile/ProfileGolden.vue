<script setup>
import { ref } from "vue";
import Ad from "@/components/Ad.vue";
import { useAdStore } from "@/stores/ads";
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();
const ads = useAdStore().ads;
const percent = ref(15);
const circumference = ref(377);
</script>
<template>
  <main class="flex flex-col-reverse bg-white p-3 lg:flex-row lg:p-0">
    <!-- cars  -->
    <section
      class="min-h-screen rounded-lg py-5 shadow-2xl lg:w-1/2 lg:rounded-r-[40px] lg:rounded-l-none lg:p-8 lg:py-10"
    >
      <div
        class="mx-auto mb-5 flex max-w-4xl items-center justify-between px-5"
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
      <article class="px-5">
        <h2 class="mb-5 text-2xl font-extrabold capitalize text-black">
          My ads
        </h2>
        <div class="relative mb-4 w-full max-w-2xl">
          <Ad
            :data="ads.slice(0, 4)"
            :showEdit="true"
            :showPromotion="true"
            :showDate="false"
          />
        </div>
      </article>
    </section>
    <!-- profile -->
    <section class="min-h-screen py-5 lg:w-1/2 lg:p-12 lg:py-10">
      <article class="mb-12">
        <h1
          class="mb-3 text-3xl font-extrabold capitalize text-teal-700 md:text-4xl"
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
                class="mr-4 rounded bg-gradient-to-r from-yellow-400 to-yellow-500 py-1 px-2 text-center font-bold text-white"
              >
                {{ store.user.membership }}
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
      <article class="sm:flex">
        <article class="mb-5 px-5">
          <h3 class="mb-5 text-2xl font-extrabold capitalize text-black">
            Ads usage
          </h3>
          <div class="relative mb-4 w-full">
            <!-- Circle -->
            <div
              class="relative inline-flex items-center justify-center rounded-full"
            >
              <svg class="h-52 w-52">
                <circle
                  class="scale-150 text-gray-200"
                  stroke-width="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="60"
                  cx="70"
                  cy="70"
                />
                <circle
                  class="scale-150 text-lime-400"
                  stroke-width="8"
                  :stroke-dasharray="circumference"
                  :stroke-dashoffset="
                    circumference - (percent / 100) * circumference
                  "
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="60"
                  cx="70"
                  cy="70"
                />
              </svg>
              <span
                class="absolute text-3xl font-extrabold text-teal-700"
                v-text="`${percent}%`"
              ></span>
            </div>
          </div>
        </article>
        <article class="mb-5 px-5">
          <h3 class="mb-5 text-2xl font-extrabold capitalize text-black">
            Promotions
          </h3>
          <div class="relative mb-4 w-full">
            <div class="grid gap-5 md:grid-cols-2">
              <div
                class="relative flex items-start justify-start rounded-2xl bg-orange-50 p-3"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8 fill-orange-200 stroke-orange-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <div>
                  <h2
                    class="font-extrabold capitalize text-teal-700 sm:text-lg md:text-xl"
                  >
                    10
                  </h2>
                  <p class="sm:text-md text-teal-700 md:text-lg">remaining</p>
                </div>
              </div>

              <div
                class="relative flex items-start justify-start rounded-2xl bg-teal-50 p-3"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8 stroke-teal-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2
                    class="font-extrabold capitalize text-teal-700 sm:text-lg md:text-xl"
                  >
                    10
                  </h2>
                  <p class="sm:text-md text-teal-700 md:text-lg">remaining</p>
                </div>
              </div>

              <div
                class="relative flex items-start justify-start rounded-2xl bg-blue-100 p-3"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8 fill-blue-300 stroke-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                </div>
                <div>
                  <h2
                    class="font-extrabold capitalize text-teal-700 sm:text-lg md:text-xl"
                  >
                    0
                  </h2>
                  <p class="sm:text-md text-teal-700 md:text-lg">remaining</p>
                </div>
              </div>

              <div
                class="relative flex items-start justify-start rounded-2xl bg-rose-100 p-3"
              >
                <div class="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-8 w-8 fill-rose-300 stroke-rose-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>
                </div>
                <div>
                  <h2
                    class="font-extrabold capitalize text-teal-700 sm:text-lg md:text-xl"
                  >
                    0
                  </h2>
                  <p class="sm:text-md text-teal-700 md:text-lg">remaining</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
      <article class="px-5">
        <h3 class="mb-5 text-2xl font-extrabold capitalize text-black">
          Shop views
        </h3>
        <div class="relative mb-4 w-full max-w-2xl">
          <area-chart
            :library="{ backgroundColor: '#eee' }"
            :data="{
              '2017-1-1': 30,
              '2017-2-2': 39,
              '2017-3-3': 30,
              '2017-4-4': 11,
              '2017-5-5': 26,
              '2017-6-6': 40,
              '2017-7-7': 49,
              '2017-8-8': 22,
              '2017-9-9': 50,
              '2017-10-10': 17,
              '2017-11-11': 36,
            }"
          ></area-chart>
        </div>
      </article>
    </section>
  </main>
</template>
<style>
.stat-circle circle.bg {
  fill: none;
  stroke: #f1f1f1;
  stroke-width: 2;
}

.stat-circle circle.progress {
  fill: none;
  stroke: #2ecc71;
  stroke-width: 2;
  stroke-dasharray: 51 51;
  stroke-dashoffset: -51;
  stroke-linecap: round;
}

.stat-circle text {
  font-size: 3px;
  text-anchor: middle;
  fill: #555;
}
</style>

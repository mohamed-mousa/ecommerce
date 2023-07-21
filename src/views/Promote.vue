<script setup>
import { useAdStore } from "@/stores/ads";
import { useRoute } from "vue-router";
import router from "@/router/index";
import Ad from "@/components/Ad.vue";
import { ref } from "vue";
const route = useRoute();
const store = useAdStore();
const car = ref({
  id: null,
  views: null,
  calls: null,
  hot: null,
  statusCode: null,
  statusName: null,
  title: null,
  image: null,
  km: null,
  price: null,
  date: null,
  location: null,
});
car.value = store.ads.find((s) => s.id == route.params.carId);
if (!car.value) {
  router.push({ name: "Membership" });
}
</script>

<template>
  <main>
    <section
      class="mx-auto max-w-3xl items-start justify-between px-5 py-5 md:flex md:py-8"
    >
      <router-link
        :to="{ name: 'ProfileNoAds' }"
        class="flex items-center justify-center font-extrabold text-teal-500 focus:outline-none focus-visible:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-12 w-12 rounded-full bg-teal-50 p-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <span class="ml-4">Back</span>
      </router-link>

      <section class="mt-5 text-center md:mt-24 md:text-left">
        <article class="mb-8">
          <h1
            class="text-3xl font-extrabold capitalize text-teal-700 md:text-5xl"
          >
            Promote
          </h1>
          <p class="text-xl font-semibold text-gray-400">
            Your ads will be shown under your profile
          </p>
        </article>
        <Ad :data="[car]" :showStatus="true" :showDate="false" />
        <article class="mt-4 mb-2">
          <h4 class="text-lg font-bold capitalize text-gray-800 md:text-2xl">
            Get more engagement, Sell fast
          </h4>
        </article>
        <div class="items-center md:flex md:justify-between">
          <div class="w-full rounded-2xl border-2 border-fuchsia-400">
            <div
              class="relative flex h-full w-full items-center justify-around px-3 sm:items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-20 w-20 stroke-fuchsia-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
              <div class="relative mx-3 w-full py-3 xl:mx-5">
                <h2 class="font-extrabold capitalize text-gray-800 md:text-lg">
                  Boost your ad
                </h2>
                <p class="text-base font-bold text-gray-700 text-opacity-50">
                  Get up to 10x en responses on yo
                </p>
                <p class="text-base font-bold text-gray-700 text-opacity-50">
                  ads with more highlighting options
                </p>
              </div>
              <button
                type="button"
                class="focus-visible:outline-bl flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-900 to-fuchsia-600 py-1 px-2 text-center text-sm font-bold text-white ring-neutral-900 transition-all duration-500 hover:border-purple-600 hover:to-purple-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-2 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>

                Promote
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

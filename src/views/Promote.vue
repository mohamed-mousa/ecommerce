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
      class="mx-auto max-w-2xl items-start justify-between px-5 py-5 md:flex md:py-8"
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
      </section>
    </section>
  </main>
</template>

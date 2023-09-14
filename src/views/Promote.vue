<script setup>
import { useAdStore } from "@/stores/ads";
import { useRoute } from "vue-router";
import router from "@/router/index";
import Ad from "@/components/Ad.vue";
import { ref } from "vue";
const route = useRoute();
const store = useAdStore();
const isShowMore = ref(false);
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
          <div class="mb-8 w-full rounded-2xl border-2 border-fuchsia-400">
            <article
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
                @click="isShowMore = !isShowMore"
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
            </article>
            <article
              class="grid gap-2 p-3 sm:grid-cols-2 lg:grid-cols-4"
              v-if="isShowMore"
            >
              <div class="text-center">
                <div class="mb-1 rounded-2xl border-2 border-fuchsia-400 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-auto h-8 w-8 fill-yellow-300 stroke-yellow-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <h5 class="my-3 font-bold text-gray-500">Highligh</h5>
                  <p
                    class="rounded-full bg-fuchsia-200 px-1 py-0.5 font-bold text-gray-600"
                  >
                    3 days

                    <span class="ml-2 font-extrabold">X</span>
                  </p>
                </div>
                <div class="rounded-2xl bg-fuchsia-100 p-2 font-extrabold">
                  <h4 class="text-fuchsia-800">3 days</h4>
                  <p class="text-fuchsia-500">RS 1000+</p>
                </div>
              </div>

              <div class="text-center">
                <div class="mb-1 rounded-2xl border-2 border-fuchsia-400 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-auto h-8 w-8 stroke-teal-300"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h5 class="my-3 font-bold text-gray-500">Highligh</h5>
                  <span
                    class="inline-block h-8 w-8 rounded-full bg-fuchsia-200 p-1 font-extrabold text-gray-600"
                    >X</span
                  >
                </div>
                <div class="rounded-2xl bg-fuchsia-100 p-2 font-extrabold">
                  <h4 class="text-fuchsia-800">3 days</h4>
                  <p class="text-fuchsia-500">RS 1000+</p>
                </div>
              </div>

              <div class="text-center">
                <div class="mb-1 rounded-2xl border-2 border-fuchsia-400 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-auto h-8 w-8 fill-blue-300 stroke-blue-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                    />
                  </svg>
                  <h5 class="my-3 font-bold text-gray-500">Highligh</h5>
                  <span
                    class="inline-block h-8 w-8 rounded-full bg-fuchsia-200 p-1 font-extrabold text-gray-600"
                    >X</span
                  >
                </div>
                <div class="rounded-2xl bg-fuchsia-100 p-2 font-extrabold">
                  <h4 class="text-fuchsia-800">3 days</h4>
                  <p class="text-fuchsia-500">RS 1000+</p>
                </div>
              </div>

              <div class="text-center">
                <div class="mb-1 rounded-2xl border-2 border-fuchsia-400 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="mx-auto h-8 w-8 fill-red-300 stroke-red-400"
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
                  <h5 class="my-3 font-bold text-gray-500">Highligh</h5>
                  <span
                    class="inline-block h-8 w-8 rounded-full bg-fuchsia-200 p-1 font-extrabold text-gray-600"
                    >X</span
                  >
                </div>
                <div class="rounded-2xl bg-fuchsia-100 p-2 font-extrabold">
                  <h4 class="text-fuchsia-800">3 days</h4>
                  <p class="text-fuchsia-500">RS 1000+</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <article
          v-if="isShowMore"
          class="rounded-xl border-2 border-gray-50 bg-white p-3 shadow-md shadow-gray-200"
        >
          <h2 class="mb-3 text-base font-extrabold capitalize text-neutral-800">
            Invoice
          </h2>
          <p class="flex justify-between text-base font-semibold text-gray-400">
            <span class="capitalize">Highligh</span>
            <span>2000 SD</span>
          </p>
          <hr class="my-5" />
          <div
            class="text-base font-semibold text-gray-400 md:flex md:justify-between"
          >
            <p class="flex flex-col">
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="mr-1 h-6 w-6 fill-teal-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                Secure payment
              </span>
              <span
                ><img
                  class="w-52"
                  src="/images/payment-method.jpg"
                  alt="payment methods"
              /></span>
            </p>
            <p class="flex flex-col">
              <span class="mb-2">Amount to be paid</span>
              <span
                class="text-xl font-extrabold capitalize text-neutral-800 lg:text-2xl"
                >2000 SD</span
              >
            </p>
          </div>
          <router-link
            :to="{ name: 'ProfileNoAds' }"
            class="focus-visible:outline-bl mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
            >Continue</router-link
          >
        </article>
      </section>
    </section>
  </main>
</template>

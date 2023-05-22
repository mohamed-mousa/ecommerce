<script setup>
import Membership from "@/components/Membership.vue";
import { useAuthStore } from "@/stores/auth";
const store = useAuthStore();

const memberships = [
  {
    title: "Online shop",
    icon: "/images/membership/1.png",
    description:
      "Get a page dedicated entirely to your business, including beautiful photos. your business details and all of your ads in one place. If you have a Premium membership. users can search for products directly in your shop",
  },
  {
    title: "Member sticker",
    icon: "/images/membership/2.png",
    description:
      "You will got a member sticker based on your membership level, to get highlighted across the website",
  },
  {
    title: "Post more ads",
    icon: "/images/membership/3.png",
    description:
      "Our Membership packages allow you to post an unlimited number of ads. The more you post, the more you sell ",
  },
  {
    title: "Dashboard",
    icon: "/images/membership/4.png",
    description:
      "You can monitor how many visitors engaged with your contents and how may views",
  },
];
</script>

<template>
  <main>
    <section
      class="mx-auto max-w-2xl items-center justify-between px-5 py-5 md:flex md:py-8"
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

      <article class="mt-5 text-center md:mt-0">
        <h1
          class="text-3xl font-extrabold capitalize text-teal-700 md:text-5xl"
        >
          Become a member
        </h1>
        <p class="text-xl font-semibold text-gray-400">
          Signup for membership and enjoy the benefits
        </p>
      </article>
    </section>
    <section class="mx-auto mt-5 max-w-6xl">
      <article class="lg:flex">
        <article class="p-5 lg:w-1/2">
          <article class="justify-between md:flex">
            <article
              class="mb-6 rounded-2xl bg-gradient-to-r from-amber-800 to-amber-200 p-0.5 shadow-md shadow-amber-100"
            >
              <div class="rounded-2xl bg-white p-3">
                <h3
                  class="mb-4 text-2xl font-extrabold capitalize text-amber-800"
                >
                  {{ store.packages[1].name }}
                </h3>
                <ul class="mb-3 text-base font-semibold text-gray-400">
                  <li class="mb-1">- Choose 3 catagories.</li>
                  <li class="mb-1">- Post 50 ads for free</li>
                  <li class="mb-1">- Shop dashboard.</li>
                  <li>- Bronze badge.</li>
                </ul>
                <router-link
                  :to="'/membership/' + store.packages[1].name"
                  class="focus-visible:outline-bl w-54 rounded-full border-2 border-[#fff] bg-gradient-to-r from-amber-800 to-amber-500 py-1 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:border-amber-600 hover:to-amber-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
                >
                  {{ store.packages[1].price }} SD ber month
                </router-link>
              </div>
            </article>
            <article
              class="mb-6 rounded-2xl bg-gradient-to-r from-amber-200 to-amber-400 p-0.5 shadow-md shadow-amber-100"
            >
              <div class="rounded-2xl bg-white p-3">
                <h3
                  class="mb-4 text-2xl font-extrabold capitalize text-amber-200"
                >
                  {{ store.packages[2].name }}
                </h3>
                <ul class="mb-3 text-base font-semibold text-gray-400">
                  <li class="mb-1">- Choose 5 catagories.</li>
                  <li class="mb-1">- Post 100 ads for free</li>
                  <li class="mb-1">- Shop dashboard.</li>
                  <li>- Bronze badge.</li>
                </ul>
                <router-link
                  :to="'/membership/' + store.packages[2].name"
                  class="focus-visible:outline-bl w-54 rounded-full border-2 border-[#fff] bg-gradient-to-r from-amber-200 to-amber-400 py-1 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:border-amber-600 hover:to-amber-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
                >
                  {{ store.packages[2].price }} SD ber month
                </router-link>
              </div>
            </article>
          </article>
          <article
            class="rounded-2xl bg-gradient-to-r from-gray-400 to-gray-200 p-0.5 shadow-md shadow-gray-100"
          >
            <div class="rounded-2xl bg-white p-3">
              <h3 class="mb-4 text-2xl font-extrabold capitalize text-gray-400">
                {{ store.packages[3].name }}
              </h3>
              <div class="justify-between md:flex">
                <ul class="mb-3 text-base font-semibold text-gray-400">
                  <li class="mb-1">- all catagories.</li>
                  <li class="mb-1">- Post 250 ads for free</li>
                  <li class="mb-1">- Shop dashboard.</li>
                </ul>
                <ul class="mb-3 text-base font-semibold text-gray-400">
                  <li class="mb-1">- Bronze badge</li>
                  <li class="mb-1">- Dedicated agent</li>
                  <li class="mb-1">- 20 days credit</li>
                </ul>
              </div>
              <router-link
                :to="'/membership/' + store.packages[3].name"
                class="focus-visible:outline-bl w-54 rounded-full border-2 border-[#fff] bg-gradient-to-r from-gray-400 to-gray-200 py-1 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:border-gray-600 hover:to-gray-500 hover:shadow-xl focus:outline-none focus-visible:outline-none"
              >
                {{ store.packages[3].price }} SD ber month
              </router-link>
            </div>
          </article>
        </article>
        <article class="p-5 lg:w-1/2">
          <h2 class="mb-5 text-2xl font-extrabold capitalize text-neutral-900">
            Benefits of Membership
          </h2>
          <Membership :data="memberships" />
        </article>
      </article>
    </section>
  </main>
</template>

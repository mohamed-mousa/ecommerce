<script setup>
import Membership from "@/components/Membership.vue";
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
        <h1 class="text-5xl font-extrabold capitalize text-teal-700">
          Become a member
        </h1>
        <p class="text-xl font-semibold text-gray-400">
          Signup for membership and enjoy the benefits
        </p>
      </article>
    </section>
    <section class="mx-auto mt-5 max-w-6xl">
      <article class="lg:flex">
        <article class="bg-red-400 p-5 lg:w-1/2">aaaa</article>
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

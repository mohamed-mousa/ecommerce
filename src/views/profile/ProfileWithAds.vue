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
          class="h-9 w-9 rounded-full bg-teal-50 p-2 md:h-12 md:w-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <span class="ml-4">Back</span>
      </router-link>
    </div>
    <div class="mx-auto mt-10 max-w-xl px-5 py-5 md:mt-32 md:py-8">
      <h1 class="text-9xl">Profile with ads</h1>
    </div>
  </main>
</template>

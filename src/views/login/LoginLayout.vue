<script setup></script>

<template>
  <main>
    <div class="mx-auto flex max-w-4xl justify-between px-5 py-5 md:py-8">
      <slot name="back"></slot>

      <a
        href="#"
        class="flex items-center justify-center font-extrabold text-teal-500 focus:outline-none focus-visible:outline-none"
      >
        <span class="mr-4">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-9 w-9 rounded-full bg-teal-50 p-2 md:h-12 md:w-12"
        >
          <path
            fill-rule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
    <div class="mx-auto mt-10 max-w-xl px-5 py-5 md:mt-32 md:py-8">
      <slot></slot>
    </div>
  </main>
</template>

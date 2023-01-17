<script setup>
import Input from "@/components/Input.vue";
</script>

<template>
  <main class="bg-emerald-600 p-3 md:flex md:p-0">
    <!-- Welcome  -->
    <section
      class="min-h-screen bg-emerald-600 md:w-7/12 md:p-8 lg:justify-center lg:pt-20"
    >
      <!-- page title -->
      <article class="mx-auto mb-8 max-w-2xl">
        <div class="mb-4 flex items-center justify-between">
          <h1 class="text-5xl font-semibold text-white md:text-6xl">Welcome</h1>
          <a href="#" class="group flex items-center">
            <span
              class="mr-2 hidden text-xl text-white text-opacity-70 group-hover:text-opacity-100 xl:inline"
              >Login</span
            >
            <fa icon="user-circle" class="text-3xl text-white md:text-2xl" />
          </a>
        </div>
        <p class="text-xl text-white text-opacity-70">
          The largest market place in sudan
        </p>
      </article>

      <!-- search input -->
      <article class="mx-auto mb-8 max-w-2xl">
        <div class="relative h-16 w-full">
          <fa
            icon="search"
            class="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-white text-opacity-50 md:text-3xl"
          />
          <Input
            type="search"
            placeholder="Search"
            class="border-transparent bg-emerald-700 bg-opacity-60 pl-16 text-xl text-white placeholder:text-white placeholder:text-opacity-70"
          />
        </div>
      </article>
    </section>

    <!-- cars -->
    <section
      class="min-h-screen rounded-lg bg-white shadow-2xl md:w-5/12 lg:rounded-l-[40px] lg:rounded-r-none lg:p-80"
    ></section>
  </main>
</template>

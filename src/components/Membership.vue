<script setup>
defineProps(["data"]);
</script>

<template>
  <article
    v-for="membership in data"
    class="mb-8 flex items-start justify-start"
  >
    <img class="h-12" :src="membership.icon" :alt="membership.title" />
    <div class="ml-5 md:ml-10">
      <h3 class="mb-2 text-lg font-extrabold capitalize text-neutral-900">
        {{ membership.title }}
      </h3>
      <p class="text-sm font-semibold text-gray-400">
        {{ membership.description }}
      </p>
    </div>
  </article>
</template>

<script setup>
import AdsSkeleton from "@/Components/AdsSkeleton .vue";
import { ref, onMounted } from "vue";

const props = defineProps(["data"]);
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <a
    v-for="ad in data"
    href="#"
    class="relative mb-4 flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-transparent bg-slate-100 p-2 transition-all duration-500 hover:border-slate-200 hover:bg-slate-50 hover:shadow-lg focus:outline-none focus-visible:outline-none sm:items-start sm:p-3 xl:p-0"
  >
    <AdsSkeleton :show="loading" />
    <img
      :src="ad.image"
      :alt="ad.title"
      width="300"
      height="200"
      loading="lazy"
      class="h-32 w-32 rounded-2xl transition-all duration-700 group-hover:scale-150 sm:h-40 sm:w-40"
    />
    <div class="mx-3 w-full py-3 xl:mx-5">
      <h2 class="font-extrabold capitalize text-gray-800 sm:text-lg md:text-xl">
        {{ ad.title }}
      </h2>
      <p class="text-base font-bold text-gray-700 text-opacity-50">
        {{ ad.km }} KM
      </p>
      <p class="text-base font-bold text-gray-700 text-opacity-50">
        {{ ad.location }}
      </p>

      <div class="sm:mt-3 xl:flex xl:justify-between">
        <h3 class="font-extrabold capitalize text-emerald-500 sm:text-lg">
          SDG {{ ad.price }}
        </h3>
        <p class="text-sm font-bold text-gray-700 text-opacity-50">
          {{ ad.date }} mins ago
        </p>
      </div>
    </div>
  </a>
</template>

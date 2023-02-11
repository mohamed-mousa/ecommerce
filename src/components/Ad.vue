<script setup>
import AdsSkeleton from "@/Components/AdsSkeleton.vue";
import { ref, onMounted } from "vue";

const props = defineProps({
  data: Object,
  showStatus: {
    default: false,
    type: Boolean,
  },
  showHot: {
    default: false,
    type: Boolean,
  },
  showDate: {
    default: true,
    type: Boolean,
  },
  showEdit: {
    default: false,
    type: Boolean,
  },
  showPromotion: {
    default: false,
    type: Boolean,
  },
});
const loading = ref(true);

onMounted(() => {
  loading.value = false;
});
</script>

<template>
  <div class="items-top md:flex md:justify-between" v-for="ad in data">
    <a
      href="#"
      class="relative mb-4 flex w-full items-center justify-center overflow-hidden rounded-2xl border-2 border-transparent bg-slate-100 transition-all duration-500 hover:border-slate-200 hover:bg-slate-50 hover:shadow-lg focus:outline-none focus-visible:outline-none sm:items-start"
    >
      <AdsSkeleton :show="loading" />
      <span
        v-if="showStatus"
        class="absolute left-0 top-2 hidden py-1 px-2 text-sm font-bold sm:block"
        :class="
          ad.statusCode === 0
            ? 'bg-gradient-to-r from-amber-600 to-amber-400  text-white before:absolute before:top-0 before:-right-4 before:border-t-[17px] before:border-r-[17px] before:border-t-amber-400 before:border-r-transparent after:absolute after:bottom-0 after:-right-4 after:border-b-[17px] after:border-r-[17px] after:border-b-amber-400 after:border-r-transparent '
            : 'bg-gradient-to-r from-emerald-300 to-lime-400  text-emerald-900 before:absolute before:top-0 before:-right-4 before:border-t-[17px] before:border-r-[17px] before:border-t-lime-400 before:border-r-transparent after:absolute after:bottom-0 after:-right-4 after:border-b-[17px] after:border-r-[17px] after:border-b-lime-400 after:border-r-transparent'
        "
      >
        {{ ad.statusName }}
      </span>
      <span
        v-if="ad.hot && showHot"
        class="absolute left-0 top-0 bg-gradient-to-r from-red-500 to-red-500 py-1 px-2 text-xs font-extrabold text-white sm:left-auto sm:right-4 sm:top-2 sm:rounded sm:before:absolute sm:before:-bottom-2 sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:border-t-[10px] sm:before:border-l-[10px] sm:before:border-r-[10px] sm:before:border-t-red-500 sm:before:border-l-transparent sm:before:border-r-transparent"
      >
        HOT
      </span>
      <img
        :src="ad.image"
        :alt="ad.title"
        width="300"
        height="200"
        loading="lazy"
        class="h-28 w-28 rounded-2xl transition-all duration-700 group-hover:scale-150 sm:h-40 sm:w-80"
      />
      <div class="relative mx-3 w-full py-3 xl:mx-5">
        <span
          v-if="showStatus"
          class="absolute -left-32 top-7 inline py-0.5 pl-2 text-xs font-bold sm:hidden"
          :class="
            ad.statusCode === 0
              ? 'bg-gradient-to-r from-amber-600 to-amber-400  text-white before:absolute before:top-0 before:-right-4 before:border-t-[17px] before:border-r-[17px] before:border-t-amber-400 before:border-r-transparent after:absolute after:bottom-0 after:-right-4 after:border-b-[17px] after:border-r-[17px] after:border-b-amber-400 after:border-r-transparent '
              : 'bg-gradient-to-r from-emerald-300 to-lime-400  text-emerald-900 before:absolute before:top-0 before:-right-4 before:border-t-[17px] before:border-r-[17px] before:border-t-lime-400 before:border-r-transparent after:absolute after:bottom-0 after:-right-4 after:border-b-[17px] after:border-r-[17px] after:border-b-lime-400 after:border-r-transparent'
          "
        >
          {{ ad.statusName }}
        </span>
        <h2
          class="font-extrabold capitalize text-gray-800 sm:text-lg md:text-xl"
        >
          {{ ad.title }}
        </h2>
        <p class="text-base font-bold text-gray-700 text-opacity-50">
          {{ ad.km }} KM
        </p>
        <p class="text-base font-bold text-gray-700 text-opacity-50">
          {{ ad.location }}
        </p>

        <div class="sm:mt-6 xl:flex xl:justify-between">
          <h3 class="font-extrabold capitalize text-emerald-500 sm:text-lg">
            SDG {{ ad.price }}
          </h3>
          <p
            v-if="showDate"
            class="text-sm font-bold text-gray-700 text-opacity-50"
          >
            {{ ad.date }} mins ago
          </p>

          <p
            v-if="showEdit"
            class="flex items-center font-bold text-gray-700 text-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>

            Edit
          </p>
          <button
            v-if="showPromotion"
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
    </a>

    <div class="mb-8 md:ml-4 md:mb-0" v-if="$route.name == 'ProfileGolden'">
      <div class="w-full rounded-2xl bg-yellow-100 px-4 py-3">
        <div
          class="mb-2 flex items-center justify-start text-sm font-extrabold text-teal-500"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          <span>
            {{ ad.views }}
          </span>
        </div>
        <div
          class="flex items-center justify-start text-sm font-extrabold text-teal-500"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="mr-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </span>
          <span>
            {{ ad.calls }}
          </span>
        </div>

        <div class="mt-4 mb-2" v-if="ad.hot">
          <span
            class="relative bg-gradient-to-r from-red-500 to-red-500 py-1 px-2 text-xs font-extrabold text-white sm:rounded sm:before:absolute sm:before:-bottom-2 sm:before:left-1/2 sm:before:-translate-x-1/2 sm:before:border-t-[10px] sm:before:border-l-[10px] sm:before:border-r-[10px] sm:before:border-t-red-500 sm:before:border-l-transparent sm:before:border-r-transparent"
          >
            HOT
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

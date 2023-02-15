<template>
  <transition name="scale" mode="out-in">
    <div v-if="message" class="absolute left-0 right-0 w-full max-w-xl">
      <div
        v-if="type == 'success'"
        id="toast-success"
        class="my-4 flex w-full max-w-xl items-center rounded-2xl border-2 border-gray-100 bg-white p-4 font-bold text-gray-600 shadow-lg"
        role="alert"
      >
        <div
          class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-500"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Check icon</span>
        </div>
        <div class="ml-3 font-bold">{{ message }}</div>
      </div>
      <div
        v-else
        id="toast-danger"
        class="my-4 flex w-full max-w-xl items-center rounded-2xl border-2 border-gray-100 bg-white p-4 font-bold text-gray-600 shadow-lg"
        role="alert"
      >
        <div
          class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-500"
        >
          <svg
            aria-hidden="true"
            class="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Error icon</span>
        </div>
        <div class="ml-3 font-bold">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  message: String,
  type: String,
});
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>

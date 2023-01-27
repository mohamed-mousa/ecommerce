<script setup>
import Input from "@/components/Input.vue";
import { ref } from "vue";
const phoneNumber = ref(null);
const phoneNumberStatus = ref(null);
function checkValidation() {
  const validationRegex = /^\d{10}$/;
  if (phoneNumber.value.match(validationRegex)) {
    phoneNumberStatus.value = "valid";
  } else {
    phoneNumberStatus.value = "invalid";
  }
}
</script>

<template>
  <form>
    <h1 class="mb-3 text-5xl font-extrabold capitalize text-teal-700">Login</h1>
    <p class="text-xl font-semibold text-gray-400">
      Enter your name and phone number to confirm listing
    </p>
    <Input
      type="tel"
      v-model="phoneNumber"
      placeholder="Enter phone number"
      required
      autocomplete="mobile"
      @keyup="checkValidation()"
      :class="{
        'valid-input': phoneNumberStatus === 'valid',
        'invalid-input': phoneNumberStatus === 'invalid',
      }"
      class="mt-6 mb-2 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
    />
    <small
      v-if="phoneNumberStatus === 'invalid'"
      class="text-base font-bold text-red-900"
      >Enter valid number from 10 digits</small
    >
    <button
      type="button"
      :disabled="phoneNumberStatus !== 'valid'"
      class="focus-visible:outline-bl mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
    >
      Next
    </button>
  </form>
</template>

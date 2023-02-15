<script setup>
import Input from "@/components/Input.vue";
import Alert from "@/components/Alert.vue";
import { useAuthStore } from "@/stores/auth";
import AuthLayout from "@/views/auth/AuthLayout.vue";
import { useOtpValidation } from "@/composables/otpValidation.js";

const { otpNumber, otpStatus, otpValidationMessage } = useOtpValidation();
const store = useAuthStore();
const otp = () => {
  if (otpNumber.value == store.generatedOtp) {
    otpStatus.value = "valid";
    store.authenticateUser();
  } else {
    otpStatus.value = "invalid";
    otpValidationMessage.value = "OTP number not true? please try again";
  }
};
</script>

<template>
  <AuthLayout>
    <template v-slot:back>
      <router-link
        to="/login"
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
    </template>
    <Alert
      :message="otpValidationMessage"
      type="error"
      class="-bottom-[10rem] z-20"
    />
    <Alert
      :message="'Enter this OTP number ' + store.generatedOtp"
      class="-bottom-[5rem] z-10"
      type="success"
    />
    <form @submit.prevent="otp">
      <h1 class="mb-3 text-5xl font-extrabold capitalize text-teal-700">OTP</h1>
      <p class="text-xl font-semibold text-gray-400">
        Enter the 4 digit number which send to
      </p>
      <h2 class="mt-3 mb-2 text-3xl font-extrabold capitalize text-teal-700">
        {{ store.user.phone }}
      </h2>
      <Input
        type="tel"
        v-model="otpNumber"
        placeholder="Enter OTP code"
        required
        autocomplete="mobile"
        :class="{
          'valid-input': otpStatus === 'valid',
          'invalid-input': otpStatus === 'invalid',
        }"
        class="mt-6 mb-2 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
      />

      <button
        type="submit"
        :disabled="otpStatus === 'invalid' || otpStatus === 'clean'"
        class="focus-visible:outline-bl mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
      >
        Done
      </button>
    </form>
  </AuthLayout>
</template>

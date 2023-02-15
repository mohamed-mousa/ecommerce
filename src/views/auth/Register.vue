<script setup>
import Input from "@/components/Input.vue";
import Alert from "@/components/Alert.vue";
import { useAuthStore } from "@/stores/auth";
import AuthLayout from "@/views/auth/AuthLayout.vue";
import { usePhoneValidation } from "@/composables/phoneValidation.js";
import { useNameValidation } from "@/composables/nameValidation.js";

const store = useAuthStore();
const { phoneNumber, phoneNumberStatus, PhoneValidationMessage } =
  usePhoneValidation();
const { name, nameStatus, nameValidationMessage } = useNameValidation();
const otp = () => {
  if (phoneNumberStatus.value === "valid") {
    store.sendOtp(phoneNumber.value, name.value);
  }
};
</script>

<template>
  <AuthLayout>
    <template v-slot:back>
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
    </template>

    <form @submit.prevent="otp">
      <h1 class="mb-3 text-5xl font-extrabold capitalize text-teal-700">
        Register
      </h1>
      <p class="text-xl font-semibold text-gray-400">
        Enter your name and phone number
      </p>
      <Input
        type="text"
        v-model="name"
        name="username"
        placeholder="Full name"
        required
        autocomplete="mobile"
        :class="{
          'valid-input': nameStatus === 'valid',
          'invalid-input': nameStatus === 'invalid',
        }"
        class="mt-6 mb-2 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
      />
      <Input
        type="tel"
        v-model="phoneNumber"
        name="Phone"
        placeholder="Phone number"
        required
        autocomplete="mobile"
        :class="{
          'valid-input': phoneNumberStatus === 'valid',
          'invalid-input': phoneNumberStatus === 'invalid',
        }"
        class="mb-2 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
      />

      <p class="text-base text-gray-400">
        Have account
        <router-link
          to="/login"
          class="font-extrabold text-teal-500 focus:outline-none focus-visible:outline-none"
          >Login</router-link
        >
      </p>

      <Alert
        :message="PhoneValidationMessage"
        type="error"
        class="-bottom-[5rem]"
      />
      <Alert
        :message="nameValidationMessage"
        type="error"
        class="-bottom-[6rem]"
      />
      <button
        type="submit"
        :disabled="phoneNumberStatus !== 'valid' || nameStatus !== 'valid'"
        class="focus-visible:outline-bl mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
      >
        Next
      </button>
    </form>
  </AuthLayout>
</template>

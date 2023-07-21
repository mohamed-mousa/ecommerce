<script setup>
import { useAuthStore } from "@/stores/auth";
import Input from "@/components/Input.vue";
import { useRoute } from "vue-router";
import router from "@/router/index";
import { ref } from "vue";
const route = useRoute();
const store = useAuthStore();
const selectedPackage = ref({
  title: "",
  status: false,
  image: null,
  description: null,
  expire_at: null,
  questions: [],
});
selectedPackage.value = store.packages.find(
  (s) => s.name == route.params.membershipPackage
);
if (!selectedPackage.value) {
  router.push({ name: "Membership" });
}
const payment = () => {
  store.payment(selectedPackage.value);
};
</script>

<template>
  <main>
    <section
      class="mx-auto max-w-2xl items-start justify-between px-5 py-5 md:flex md:py-8"
    >
      <router-link
        to="/Membership"
        class="flex items-center justify-center font-extrabold text-teal-500 focus:outline-none focus-visible:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-12 w-12 rounded-full bg-teal-50 p-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <span class="ml-4">Back</span>
      </router-link>

      <section class="mt-5 text-center md:mt-10 md:text-left">
        <article class="mb-8">
          <h1
            class="text-3xl font-extrabold capitalize text-teal-700 md:text-5xl"
          >
            Payment
          </h1>
          <p class="text-xl font-semibold text-gray-400">
            Fill the following details to make the payment
          </p>
        </article>
        <article
          class="rounded-xl border-2 border-gray-50 bg-white p-3 shadow-md shadow-gray-200"
        >
          <h2 class="mb-3 text-base font-extrabold capitalize text-neutral-800">
            Invoice
          </h2>
          <p class="flex justify-between text-base font-semibold text-gray-400">
            <span class="capitalize"
              >{{ selectedPackage.name }} membership</span
            >
            <span>{{ selectedPackage.price }} SD</span>
          </p>
          <hr class="my-5" />
          <div
            class="text-base font-semibold text-gray-400 md:flex md:justify-between"
          >
            <p class="flex flex-col">
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="mr-1 h-6 w-6 fill-teal-700"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clip-rule="evenodd"
                  />
                </svg>

                Secure payment
              </span>
              <span
                ><img
                  class="w-52"
                  src="/images/payment-method.jpg"
                  alt="payment methods"
              /></span>
            </p>
            <p class="flex flex-col">
              <span class="mb-2">Amount to be paid</span>
              <span
                class="text-xl font-extrabold capitalize text-neutral-800 lg:text-2xl"
                >{{ selectedPackage.price }} SD</span
              >
            </p>
          </div>
        </article>

        <article>
          <h2
            class="mb-4 mt-10 text-base font-extrabold capitalize text-neutral-800"
          >
            payment details
          </h2>
          <form @submit.prevent="payment">
            <Input
              type="text"
              placeholder="Name on card"
              class="mb-5 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
            />
            <Input
              type="number"
              placeholder="Card Number"
              class="mb-5 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
            />

            <div class="grid sm:grid-cols-2 sm:gap-4">
              <Input
                type="text"
                placeholder="Expiry date"
                class="mb-5 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
              />
              <Input
                type="number"
                placeholder="CVV"
                class="mb-5 border-transparent bg-[#ECEDED] text-xl text-gray-500 placeholder:text-gray-400"
              />
            </div>
            <button
              type="submit"
              class="focus-visible:outline-bl mt-2 block w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 py-4 px-8 text-center font-bold text-white ring-neutral-900 transition-all duration-500 hover:to-emerald-600 hover:shadow-xl focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
            >
              Continue
            </button>
          </form>
        </article>
      </section>
    </section>
  </main>
</template>

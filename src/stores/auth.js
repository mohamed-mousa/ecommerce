/* Defining a store. */
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import router from "@/router/index";

export const useAuthStore = defineStore('auth', () => {
    const phoneNumber = ref(null)
    const generatedOtp = ref(null)
    const hasPhoneNumber = ref(false)
    const user = reactive(
        { id: 1, name: 'Stephen Hunt', phone: '(865) 227-5707', membership: 'free' }
    )
    function sendOtp(phone) {
        if (phone) {
            phoneNumber.value = phone
            generatedOtp.value = Math.floor(Math.random() * 9000) + 1000
            hasPhoneNumber.value = true
            router.push({ name: "Otp" });
        }
    }

    function login() {
        user.phone = phoneNumber.value
        router.push({ name: "ProfileNoAds" });
    }

    return { sendOtp, phoneNumber, hasPhoneNumber, generatedOtp, login, user }

})
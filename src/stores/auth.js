/* Defining a store. */
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import router from "@/router/index";

export const useAuthStore = defineStore('auth', () => {
    const generatedOtp = ref(null)
    const user = reactive(JSON.parse(localStorage.getItem('user')) || { id: 1, name: '', phone: '', membership: 'free' })
    function sendOtp(phone, name) {
        name ? user.name = name : user.name = 'Jon Doe'
        if (phone) {
            user.phone = phone
            generatedOtp.value = Math.floor(Math.random() * 9000) + 1000
            router.push({ name: "Otp" });
        }
    }

    function authenticateUser() {
        localStorage.setItem('user', JSON.stringify(user))
        router.push({ name: "ProfileNoAds" });
    }

    function logout() {
        localStorage.removeItem('user')
        this.user = { id: 1, name: '', phone: '', membership: 'free' }
        router.push({ name: "Login" });
    }

    return { sendOtp, generatedOtp, authenticateUser, user, logout }

})
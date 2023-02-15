import { ref, onMounted, onUnmounted } from 'vue'

export function useOtpValidation() {
    const otpNumber = ref(null)
    const otpStatus = ref(null)
    const otpValidationMessage = ref(null)


    function checkOtpValidation() {
        const validationRegex = /^\d{4}$/;
        if (otpNumber.value.match(validationRegex)) {
            otpStatus.value = "valid";
            otpValidationMessage.value = "";
        } else {
            otpStatus.value = "invalid";
            otpValidationMessage.value = "Enter valid number from 4 digits";
        }
    }

    onMounted(() => window.addEventListener('keyup', checkOtpValidation))
    onUnmounted(() => window.removeEventListener('keyup', checkOtpValidation))

    return { otpNumber, otpStatus, otpValidationMessage }
}

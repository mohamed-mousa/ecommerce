import { ref, onMounted, onUnmounted } from 'vue'

export function usePhoneValidation() {
    const phoneNumber = ref(null)
    const phoneNumberStatus = ref(null)
    const PhoneValidationMessage = ref(null)


    function checkPhoneValidation() {
        const validationRegex = /^\d{10}$/;
        if (phoneNumber.value.match(validationRegex)) {
            phoneNumberStatus.value = "valid";
            PhoneValidationMessage.value = "";
        } else {
            phoneNumberStatus.value = "invalid";
            PhoneValidationMessage.value = "Enter valid number from 10 digits";
        }
    }

    onMounted(() => window.addEventListener('keyup', checkPhoneValidation))
    onUnmounted(() => window.removeEventListener('keyup', checkPhoneValidation))

    return { phoneNumber, phoneNumberStatus, PhoneValidationMessage }
}

import { ref, onMounted, onUnmounted } from 'vue'

export function useNameValidation() {
    const name = ref(null)
    const nameStatus = ref(null)
    const nameValidationMessage = ref(null)


    function checkPhoneValidation() {
        const validationRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
        if (name.value.match(validationRegex)) {
            nameStatus.value = "valid";
            nameValidationMessage.value = "";
        } else {
            nameStatus.value = "invalid";
            nameValidationMessage.value = "Numbers and special characters not allowed";
        }
    }

    onMounted(() => window.addEventListener('keyup', checkPhoneValidation))
    onUnmounted(() => window.removeEventListener('keyup', checkPhoneValidation))

    return { name, nameStatus, nameValidationMessage }
}

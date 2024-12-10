import { FORMTYPES, MESSAGES } from "@/helpers/constants";

const clearFormErrors = (formType: keyof typeof MESSAGES) => {
    const errors = MESSAGES[formType]?.ERROR;
    for (const key in errors) {
        const errorInfo = errors[key];
        const errorElement = document.querySelector(`#${errorInfo.NAME}`) as HTMLElement | null;
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.add('hidden');
        }
    }
}

export default clearFormErrors
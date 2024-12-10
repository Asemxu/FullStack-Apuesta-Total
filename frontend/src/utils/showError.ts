import type { Validation } from "@/interfaces/validation";

const showError = (info: Validation) => {
    const errorElement = document.querySelector('#' + info.nameError) as HTMLElement;
    errorElement.innerHTML = info.message
    errorElement.classList.remove('hidden')
}

export default showError
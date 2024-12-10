import validateEmail from "@/utils/validateEmail";
import validatePassword from "@/utils/validatePassword";
import { MESSAGES, VALID } from "@/helpers/constants";
import type { Validation } from "@/interfaces/validation";
const isValidLogin = (formLogin: FormData) => {
    const isValid : Validation = {
        status: VALID.NOTVALID,
        message: '',
        nameError: ''
    }
    const email = (formLogin.get('email')?.toString().trim() || '').trim();; 
    const password = (formLogin.get('password')?.toString().trim() || '');; 

    if(!validateEmail(email)) {
        isValid.message = MESSAGES.LOGIN.ERROR.EMAIL.TEXT
        isValid.nameError = MESSAGES.LOGIN.ERROR.EMAIL.NAME
        return isValid
    }

    if(!validatePassword(password)) {
        isValid.message = MESSAGES.LOGIN.ERROR.PASSWORD.TEXT
        isValid.nameError = MESSAGES.LOGIN.ERROR.PASSWORD.NAME
        return isValid
    }
    isValid.status = VALID.ISVALID

    return isValid
}

export default isValidLogin
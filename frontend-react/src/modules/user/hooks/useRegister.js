import userStore from "../store/userStore";

const useRegister = () => {
    const { lastRegister , setInfoRegister , clearUser } = userStore()
    return {
        lastRegister,
        setInfoRegister,
        clearUser
    }
}

export default useRegister
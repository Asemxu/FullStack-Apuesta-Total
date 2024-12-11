import { useState } from "react"
import { fetchLib } from "../../core/utils/fetchLib"

const useLogin = () => {
    const [isLoading , setIsLoading] = useState(false)
    
    const login = async (formData) => {
        setIsLoading(true)
        const responseLogin = await fetchLib('POST' ,'auth')
        setIsLoading(false)
        return responseLogin
    }

    return {
        isLoading,
        setIsLoading,
        login
    }
}

export default useLogin

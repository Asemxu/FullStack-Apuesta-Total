import { useNavigate } from "react-router-dom"
import { useUser } from "./useUser"
import useRegister from "../../user/hooks/useRegister"
export const useLogout = () => {
    const { clearAuth } = useUser()
    const { clearUser } = useRegister()
    const navigate= useNavigate()

    const Logout = () => {
        clearAuth()
        clearUser()
        navigate('/')
    }

    return { Logout} 
}
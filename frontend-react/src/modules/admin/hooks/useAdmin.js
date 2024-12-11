import useAdminStore from "../store/adminStore"

const useAdmin = () => {
    const { data  , setData } = useAdminStore()
    return {
        data,
        setData
    }
}

export default useAdmin
import { toast } from "react-toastify";

const useToastify = () => {
    const showToastify = (success = "success", message) => {

        const props = {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        }
        var toastComponent
        if (success === "success")
            toastComponent = toast.success(message, props)
        else
            toastComponent =toast.error(message, props)

        toast.done(toastComponent)
    }

    return {
        showToastify
    }
}

export default useToastify
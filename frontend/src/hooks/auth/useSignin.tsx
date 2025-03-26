import { signinReq } from "@/api/auth"
import { getErrorMessage } from "@/lib/utilsFunc";
import useAuthStore from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


function useSignin() {

    const {setToken, setUserData} = useAuthStore();
    const navigator = useNavigate();


    const {isPending, isSuccess, isError, mutateAsync : signinMutateAsync} = useMutation({
        mutationFn : signinReq,
        onSuccess : (data) => {
            if (data.success){
                setToken(data.data.token);
                localStorage.setItem("speedcode-token", data.data.token);
                setUserData(data.data.user);
                toast.success(data.message);
                navigator("/");
            }
            else {
                toast.error("Error signing in");
            }
        },
        onError : (error) => {
            toast.error(getErrorMessage(error))
        }
    });
    
    return {
        isPending,
        isSuccess,
        isError,
        signinMutateAsync
    }
}

export default useSignin

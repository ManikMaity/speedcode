import { signupReq } from "@/api/auth"
import { getErrorMessage } from "@/lib/utilsFunc";
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";


function useSignup() {

    const navigator = useNavigate();

    const {data, isPending, isSuccess, isError, mutateAsync : signupMutateAsync} = useMutation({
        mutationFn : signupReq,
        onSuccess: (data) => {
            if (!data.success) return toast.error("Something went wrong");
            toast.success(data.message);
            navigator("/signin");
        },
        onError : (error) => {
            toast.error(getErrorMessage(error));
        }
    });

    return {
        data,
        isPending,
        isSuccess,
        isError,
        signupMutateAsync
    }
  
}

export default useSignup

import { signinReq } from "@/api/auth"
import { useMutation } from "@tanstack/react-query"


function useSignin() {
    const {isPending, isSuccess, isError, mutateAsync : signinMutateAsync} = useMutation({
        mutationFn : signinReq,
        onSuccess : (data) => {
            console.log(data);
        },
        onError : (error) => {
            console.log(error);
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

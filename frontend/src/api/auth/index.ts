import axiosInstance from "@/config/axiosInstance";

export async function signupReq({email, password, description} : {email : string, password : string, description : string}) {
    try{
        const res = await axiosInstance.post("/api/user/signup", {email, password, description});
        return res.data;
    }
    catch(err: any){
        throw err.response.data;
    }
}



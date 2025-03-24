/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function signinReq({email, password} : {email : string, password : string}) {
    try {
        const res = await axiosInstance.post("/api/user/signin", {email, password});
        return res.data;
    }
    catch(error : any){
        throw error.response.data;
    }
}

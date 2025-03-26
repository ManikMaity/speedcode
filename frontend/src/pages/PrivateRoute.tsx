import useAuthStore from "@/store/useAuthStore"
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

function PrivateRoute() {

 const {userData, token} = useAuthStore();
    if (userData && token){
       return <Outlet/>
    }
    else {
        toast("Please login first");
        return <Navigate to="/signin" />
    }

}

export default PrivateRoute

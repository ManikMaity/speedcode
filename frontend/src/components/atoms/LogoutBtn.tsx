import React from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import useAuthStore from "@/store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function LogoutBtn() {

    const {logout} = useAuthStore();
    const navigator = useNavigate();

    function logOutClick(){
        localStorage.removeItem("speedcode-token");
        logout();
        navigator("/signin");
        toast("Logged out successfully");
    }

  return (
    <Button onClick={logOutClick} className="bg-red-500/50 text-white hover:bg-red-500/80 border border-red-300 w-full cursor-pointer">
      <LogOut />
      Logout
    </Button>
  );
}

export default LogoutBtn;

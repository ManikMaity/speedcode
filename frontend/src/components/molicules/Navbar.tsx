import { Link, useLocation } from "react-router-dom"
import { ModeToggle } from "../mode-toggle";
import useAuthStore from "@/store/useAuthStore";
import AvatarBtn from "../atoms/AvatarBtn";

function Navbar() {

    const path = useLocation().pathname;
    const {userData, token} = useAuthStore();

    const navItems = [
        {name: "Home", path: "/"},
        {name :"Problems", path: "/problem"},
    ]

  return (
    <div className="flex px-6 py-3 justify-between dark:bg-gray-950 bg-gray-100 items-center">
        <div>
            <h1 className="text-xl font-bold">Speedcode</h1>
        </div> 
        <nav className="flex gap-6 items-center justify-between">
            {navItems.map((item) => (
                <Link to={item.path} key={item.name} className={`hover:text-yellow-400 ${path === item.path ? "text-yellow-400" : ""}`}>{item.name}</Link>
            ))}
            {(userData && token) ? (
                    <AvatarBtn userData={userData} />
            ) : <Link className="hover:text-yellow-400" to="/signin">Signin</Link>}
            <ModeToggle/>
        </nav>
    </div>
  )
}

export default Navbar

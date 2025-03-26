import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/organisms/MainLayout";
import AuthLayout from "./auth/AuthLayout";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout>Home</MainLayout>}></Route>
      <Route path="/problem" element={<MainLayout>Problems</MainLayout>}></Route>
      <Route path="/about" element={<h1>About</h1>}></Route>
      <Route path="/signup" element={<AuthLayout><Signup/></AuthLayout>}></Route>
      <Route path="/signin" element={<AuthLayout><Signin/></AuthLayout>}></Route>
    </Routes>
  );
}

export default AppRoute;

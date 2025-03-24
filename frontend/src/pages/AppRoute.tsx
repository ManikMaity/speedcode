import { Route, Routes } from "react-router-dom";
import SignupPage from "./SignupPage";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/about" element={<h1>About</h1>}></Route>
      <Route path="/signup" element={<SignupPage/>}></Route>
    </Routes>
  );
}

export default AppRoute;

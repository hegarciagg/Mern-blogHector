import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import SingUp from "./pages/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signUp" element={<SingUp />} />
      </Routes>
    </BrowserRouter>
  );
}

import Navbar from "./Navbar.js";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Textbooks from "../pages/Textbooks";
import Products from "../pages/Products";
import Signup from "../pages/Signup";
import Login from "../pages/Login.js";
import Profile from "../pages/Profile.js";
import { Checkout } from "../pages/Checkout.js";
import { Outlet } from "react-router";
// import { Navbar, Footer, Sidebar } from "./components";
function Layout() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;

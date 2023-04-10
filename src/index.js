import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";
import { CartProvider } from "./context/cart_context";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, Router, BrowserRouter } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  Textbooks,
  Products,
  Signup,
  Login,
  Profile,
  Checkout,
  SingleProduct,
  Cart,
  AddBook,
  Contactus,
} from "./pages";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/textbooks" element={<Textbooks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/textbooks/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
const stripe = loadStripe(process.env.REACT_APP_AUTH_STRIPE_PUBLIC_KEY);
const options = {
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <Elements stripe={stripe} options={options}>
            <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

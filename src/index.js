import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import { ProductsProvider } from "./context/products_context";

import { UserProvider } from "./context/user_context";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <Layout />
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

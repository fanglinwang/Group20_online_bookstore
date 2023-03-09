import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "textbooks",
    url: "/textbooks",
  },
  {
    id: 3,
    text: "contact us",
    url: "/products",
  },
];

export const books = [
  {
    title: "Spare",
    author: "Prince Harry The Duke of Sussex",
    img: img1,
    price: 200,
    id: 1,
  },
  {
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    price: 300,
    img: img2,
    id: 2,
  },
  {
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    price: 21.36,
    img: img3,
    id: 3,
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

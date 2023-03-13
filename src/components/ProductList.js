import React from "react";
import { useProductsContext } from "../context/products_context";
// import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
// import ListView from './ListView'

const ProductList = () => {
  const { products: products } = useProductsContext();
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;

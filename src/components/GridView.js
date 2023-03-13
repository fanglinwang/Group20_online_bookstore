import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import products_reducer from "../reducers/products_reducer";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product}></Product>;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 350px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default GridView;

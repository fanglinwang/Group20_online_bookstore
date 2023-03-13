import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/product">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-primary-2);
  width: 100%;
  min-height: 15svh;
  display: flex;
  align-items: center;

  color: #fff;
  a {
    color: #fff;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-7);
  }
`;
export default PageHero;

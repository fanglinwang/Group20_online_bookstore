import React from "react";
import AmountButtons from "../components/AmountButtons";
import { PageHero } from "../components";
import styled from "styled-components";
import { ProductList } from "../components";
const Textbooks = () => {
  return (
    <main>
      <PageHero title="Textbooks" />
      <Wrapper className="page">
        <ProductList />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;
export default Textbooks;

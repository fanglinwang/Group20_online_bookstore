import React from "react";
import styled from "styled-components";
import { StripeCheckout } from "../components";
import { useCartContext } from "../context/cart_context";
const Checkout = () => {
  const { cart } = useCartContext();
  return (
    <main>
      <Wrapper>
        {cart.length < 1 ? <div></div> : <StripeCheckout />}
        <h1>checkout here</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;
export default Checkout;

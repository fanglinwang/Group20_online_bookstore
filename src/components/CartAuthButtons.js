import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { currentUser, logout } = useUserContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        <span className="cart-container">
          <BsCart4 />
          <span className="cart-value">0</span>
          {/* <span className="icon-name">Cart</span> */}
        </span>
      </Link>
      {currentUser ? (
        <Link to="/profile" className="auth-btn">
          <span className="icon-name">{currentUser.email}</span>
        </Link>
      ) : (
        <Link to="/login" className="auth-btn">
          <span className="icon-name">Log in</span>
        </Link>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  width: 100px;
  margin-top: -10px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-2);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    // letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .icon-name {
    font-size: 1.02rem;
    position: relative;
    right: -1.5rem;
    top: 0.1rem;
    display: inline-block;
  }
`;
export default CartButtons;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, conditions } = product;
  const [mainCon, setMainCon] = useState(conditions[0]);
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 0) {
        tempAmount = 0;
      }
      return tempAmount;
    });
  };
  return (
    <Wrapper>
      <div className="colors">
        <span> conditions: </span>
        <div>
          {conditions.map((condition, index) => {
            return (
              <button
                key={index}
                style={{ background: condition }}
                onClick={() => setMainCon(condition)}
                className={`${
                  mainCon === condition ? "color-btn active" : "color-btn"
                }`}
              >
                <span className="cond">{condition}</span>
                {mainCon === condition ? <FaCheck /> : null}{" "}
              </button>
            );
          })}
        </div>
        <div className="btn-container">
          <AmountButtons
            amount={amount}
            increase={increase}
            decrease={decrease}
          />
        </div>
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainCon, amount, product)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .cond {
    color: #fff;
  }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    // width: 8rem;
    height: 1.5rem;
    // border-radius: 85%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
    width: 50px;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;

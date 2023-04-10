import React, { useState } from "react";
import styled from "styled-components";
import { AddressElement } from "@stripe/react-stripe-js";
import { useCartContext } from "../context/cart_context";
import { CartColumns, CartItem } from "../components";
import { useUserContext } from "../context/user_context";
import { Form, Card, Button, Container, Alert } from "react-bootstrap";
const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState("");
  const { cart } = useCartContext();
  const [address, setAddress] = useState("");
  const { currentUser, logout } = useUserContext();
  async function handleSubmit(event) {
    event.preventDefault();
    setIsProcessing(true);
    try {
      const data = await fetch("http://3.137.182.0:8081/api/user/orders/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookIds: ["recbiXk3FLZFpS8gk"],
          email: currentUser.email,
          address: address,
        }),
      });
    } catch {
      setError("Failed to create an account");
    }
    console.log(error);
    setIsComplete(true);
    setIsProcessing(false);
  }

  return (
    <Wrapper>
      <h1>Hello Simon!</h1>
      <hr />
      <CartColumns />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <hr />
      <div>
        <div className="address-element">
          <h2>Shipment Info</h2>
          <form id="shipping-element">
            <AddressElement
              id="address-element"
              onChange={(event) => {
                if (event.complete) {
                  // Extract potentially complete address
                  setAddress(event.value.address.line1);
                }
              }}
              options={{
                mode: "shipping",
                autocomplete: {
                  mode: "google_maps_api",
                  apiKey: "{YOUR_GOOGLE_MAPS_API_KEY}",
                },
                defaultValues: {
                  name: "Jane Doe",
                  address: {
                    line1: "354 Oyster Point Blvd",
                    line2: "",
                    city: "South San Francisco",
                    state: "CA",
                    postal_code: "94080",
                    country: "US",
                  },
                },
              }}
            />
          </form>
          <div className="payment-element">
            <h2>Payment</h2>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-field">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input
                  type="text"
                  id="expirationDate"
                  value={expirationDate}
                  onChange={(event) => setExpirationDate(event.target.value)}
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  value={cvv}
                  onChange={(event) => setCvv(event.target.value)}
                  placeholder="123"
                  maxLength="3"
                  required
                />
              </div>
              <Button
                type="submit"
                className="pay-button w-100 mt-2"
                variant="dark"
                disabled={isProcessing || isComplete}
              >
                {isProcessing
                  ? "Processing..."
                  : isComplete
                  ? "Complete!"
                  : "Pay"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;

const Wrapper = styled.main`
  margin: 25px 200px;
  h1 {
    background-image: url("./assets/yellow_stoke.png");
  } 

  .address-element {
    margin: auto;
    width: 600px;
    height: 500px;
    margin-top: 20px;
    display: inline-block;
  }
  .payment-element{
    margin: auto;
    width: 600px;
    margin-top: 20px;
  }
  .payment-form {

  // max-width: 500px;
   width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}

.form-field {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  font-family: inherit;
}

input:focus {
  outline: none;
  border-color: #00a0e9;
  box-shadow: 0 0 5px rgba(0, 160, 233, 0.5);
`;

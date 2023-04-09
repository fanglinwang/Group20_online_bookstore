import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utils/helpers";
import { useHistory } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const StripeCheckout = () => {
  const stripePromise = loadStripe(
    process.env.REACT_APP_AUTH_STRIPE_PUBLIC_KEY
  );
  const [clientSecret, setClientSecret] = useState("");
  const { cart, shipping_fee, total_amount } = useCartContext();

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const createPaymentIntent = async () => {
    try {
      const data = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
    } catch (error) {}
  };
  useEffect(() => {
    createPaymentIntent();
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Wrapper>
      {/* {clientSecret && ( */}
      {/* <Elements options={options} stripe={stripePromise}>
        <CheckoutForm />
      </Elements> */}
      {/* )} */}
    </Wrapper>
  );
};
const Wrapper = styled.div``;
export default StripeCheckout;

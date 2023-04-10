import React, { useRef, useState, useId } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import logo from "../assets/logo.png";
import { Form, Card, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Contactus = () => {
  const bookNameRef = useRef();
  const priceRef = useRef();
  const authorRef = useRef();
  const conRef = useRef();
  const imageRef = useRef();
  const { signup } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const bookid = useId();
  function generateRandomString(
    length,
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  ) {
    let randomString = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset.charAt(randomIndex);
    }

    return randomString;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await fetch(
        "http://3.137.182.0:8080/api/admin/books/addBook",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: generateRandomString(10),
            name: bookNameRef.current.value,
            price: priceRef.current.value * 100,
            author: authorRef.current.value,
            conditions: [conRef.current.value],
            image: imageRef.current.value,
            stock: 8,
          }),
        }
      );
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Wrapper>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Thank you for your interest in our products/services. We appreciate
          your feedback and would love to hear from you.
        </p>
        <p>
          Please feel free to contact us using the information provided below:
        </p>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  // background-image: url("https://images.unsplash.com/photo-1522781063645-d5e4fb3e19aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80");
  margin-bottom: 40px;
  .contact-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
    // width: 1400px;
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  form {
    width: 1500px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    font-size: 16px;
  }

  textarea {
    height: 150px;
  }

  button[type="submit"] {
    background-color: #000;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
`;
export default Contactus;

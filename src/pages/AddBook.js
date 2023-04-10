import React, { useRef, useState, useId } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import logo from "../assets/logo.png";
import { Form, Card, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const AddBook = () => {
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
      <div className="left">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "85vh" }}
        >
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <Card onSubmit={handleSubmit}>
              <Card.Body>
                <h2 className="text-center mb-3">Add Books</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <p>Feel free to add books to the list below.</p>
                <Form>
                  <Form.Group className="mb-3" id="email">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control type="text" ref={bookNameRef} required />
                  </Form.Group>
                  <Form.Group className="mb-3" id="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" ref={priceRef} required />
                  </Form.Group>

                  <Form.Group className="mb-3" id="password">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" ref={authorRef} required />
                  </Form.Group>

                  <Form.Group className="mb-3" id="exampleDataList">
                    <Form.Label>Condition</Form.Label>
                    <Form.Control type="text" ref={conRef} required />
                  </Form.Group>
                  {/* <Form.Group className="mb-3" id="password-confirm">
                <Form.Label>Images</Form.Label>
                <Form.Control type="file" multiple />
              </Form.Group> */}
                  <Form.Group className="mb-3" id="password-confirm">
                    <Form.Label>Images</Form.Label>
                    <Form.Control type="text" ref={imageRef} multiple />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mt-2"
                    variant="dark"
                    type="submit"
                  >
                    ADD
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
      {/* <div className="right">
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "85vh" }}
        >
          <div className="w-100" style={{ maxWidth: "450px" }}>
            <Card onSubmit={handleSubmit}>
              <Card.Body>
                <h2 className="text-center mb-3">Contact Us</h2>
                {error && <Alert variant="danger">{error}</Alert>}

                <Form>
                  <Form.Group className="mb-3" id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>
                  <Form.Group className="mb-3" id="price">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>

                  <Form.Group className="mb-3" size="lg" id="password">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" required />
                  </Form.Group>

                  <Button
                    disabled={loading}
                    className="w-100 mt-2"
                    variant="dark"
                    type="submit"
                  >
                    ADD
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div> */}
      {/* </Container> */}
      {/* </div> */}
    </Wrapper>
  );
};
const Wrapper = styled.main`
  background-image: url("https://images.unsplash.com/photo-1531736275454-adc48d079ce9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80");
`;
export default AddBook;

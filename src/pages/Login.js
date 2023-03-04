import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/user_context";
import logo from "../assets/logo.png";
import { Form, Card, Button, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { config } from "localforage";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useUserContext();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <Card onSubmit={handleSubmit}>
          <Card.Body>
            <h2 className="text-center mb-3">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group className="mb-3" id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group className="mb-3" id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>

              <Link>Forget Password?</Link>
              <Button disabled={loading} className="w-100 mt-3" type="submit">
                Log in
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          New to UWbook? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;

import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useUserContext } from "../context/user_context";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { currentUser, logout } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logout();
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <>
      <h2>Hello!</h2>
      <Card>
        <Card.Body>
          <strong>Email: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <button type="button" className="auth-btn" onClick={handleSubmit}>
        {/* <FiLogIn /> */}
        <span className="icon-name">Log out</span>
      </button>
    </>
  );
};

export default Profile;

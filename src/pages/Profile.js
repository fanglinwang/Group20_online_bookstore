import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useUserContext } from "../context/user_context";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { GoDiffAdded } from "react-icons/go";
const Profile = () => {
  const { currentUser, logout } = useUserContext();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profilePic, setPic] = useState("");
  const [address, setAddress] = useState(
    "354 Oyster Point Blvd, South San Francisco, CA, 94080"
  );
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
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      setPic(event.target.result);
    };
  };
  return (
    <Wrapper>
      <h2>User Profile</h2>

      <div className="profile">
        <div className="profile-image">
          {profilePic ? (
            <img src={profilePic} alt="Profile picture" />
          ) : (
            <img
              src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1397&q=80"
              alt="Profile picture"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-btn"
          />
        </div>
        <div className="profile-details">
          <h2>Simon Wang</h2>
          <p className="email">{currentUser.email}</p>
          <p className="bio">{address}</p>
          <Button
            type="button"
            variant="dark"
            className="auth-btn w-3 mt-2"
            onClick={handleSubmit}
          >
            Log Out
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  margin: 10px 40px;

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .profile-image {
    margin-right: 20px;
    position: relative;
  }

  .profile-image img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 1;
  }
  .image-btn {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .profile-image:hover {
    background-color: #f5f5f5; /* 鼠标悬停时的背景颜色 */
  }

  .profile-details {
    flex: 1;
  }

  .profile-details h2 {
    font-size: 24px;
    margin: 0 0 10px 0;
  }

  .profile-details p {
    margin: 0;
  }

  .profile-details .email {
    color: #666;
    font-size: 16px;
  }

  .profile-details .bio {
    margin-top: 10px;
    font-size: 14px;
  }
`;
export default Profile;

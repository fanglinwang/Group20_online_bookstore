import React, { useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import axios from "axios";
import { products_url as url } from "../utils/constants";
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  async function createUser(user, url) {
    try {
      const data = await fetch("http://3.137.182.0:8081/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          password: user.password,
        }),
      });
    } catch (error) {
      console.log(error);
      return { error };
    }
  }
  async function signup(email, password) {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(auth.currentUser);

      return createUser({ uid: response.user.uid, email, password }, url);
    } catch (error) {
      return { error };
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscibe;
  }, []);
  function logout() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    signup,
    logout,
    login,
  };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

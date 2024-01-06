import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";

const SignIn = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleSignIn = () => {
    // cal the API Here
    const signInData = {
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    console.log(signInData);

    fetch("https://your-backend-url.com/api/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signInData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle authentication error (e.g., incorrect credentials)
          throw new Error("Sign-in failed");
        }
      })
      .then((data) => {
        // Handle the response data, which should include your JWT access and refresh tokens
        console.log(data);
      })
      .catch((error) => {
        // Handle other errors (e.g., network issues, server problems)
        console.error(error);
        setIsError(true);
        return;
      });
    login();
    navigate("/newride");
  };

  return (
    <div className="SignIn">
      <h2>Sign In</h2>
      <div className="userdetails">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      {isError && (
        <p className="SignInError">Error: Invaild Username or Password</p>
      )}
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = () => {
    login();
    // Need to improvise this
    navigate("/");
  };

  return (
    <div>
      <h2>Sign In</h2>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;

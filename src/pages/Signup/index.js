import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import StyleSignup from "./style";
import SignupForm from "../../components/SignupForm";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) navigate("/");
  }, [auth, navigate]);

  return (
    <StyleSignup>
      <div>
        <header>Sign Up</header>
        <SignupForm />
        <div className="google-container">
          <Link to="/login">Already have an account?</Link>
          <GoogleAuthButton />
        </div>
      </div>
    </StyleSignup>
  );
};

export default Signup;

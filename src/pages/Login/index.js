import React, { useEffect, useContext } from "react";
import StyleLogin from "./style";
import LoginForm from "../../components/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import GoogleAuthButton from "../../components/GoogleAuthButton";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) navigate("/");
  }, [auth, navigate]);

  return (
    <StyleLogin>
      <div>
        <header>Log In</header>
        <LoginForm />
        <div className="google-container">
          <Link to="/signup">Create new account</Link>
          <GoogleAuthButton />
        </div>
      </div>
    </StyleLogin>
  );
};

export default Login;

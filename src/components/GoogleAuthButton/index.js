import React, { useContext } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

const GoogleAuthButton = () => {
  const provider = new GoogleAuthProvider();
  const { logInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSignIn = () => {
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        logInUser(userCredential._tokenResponse, userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <div onClick={onSignIn}>
      <svg
        style={{ cursor: "pointer" }}
        width="20px"
        fill="#17a2b8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 512"
      >
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
      </svg>
    </div>
  );
};

export default GoogleAuthButton;

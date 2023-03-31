import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import StyleSignupForm from "./style";
import { signUpSchema } from "../../schemas";
import Loading from "../UI/Loading";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const submitHandler = function (data) {
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        logInUser(userCredential._tokenResponse, userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("User with this email exists!");
      })
      .finally(() => {
        setLoading(false);
      });

    reset({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <StyleSignupForm onSubmit={handleSubmit(submitHandler)}>
      <div className="form-group">
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Username..."
        />
        {errors.email?.message && <p>{errors.email?.message}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Password..."
        />
        {errors.password?.message && <p>{errors.password?.message}</p>}
      </div>
      <div className="form-group">
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
          placeholder="Confirm password..."
        />
        {errors.confirmPassword?.message && (
          <p>{errors.confirmPassword?.message}</p>
        )}
      </div>
      <button type="submit">
        {loading && <Loading />}
        Submit
      </button>
    </StyleSignupForm>
  );
};

export default SignupForm;

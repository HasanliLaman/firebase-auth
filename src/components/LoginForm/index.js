import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import StyleLoginForm from "./style";
import { logInSchema } from "../../schemas/index";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../UI/Loading";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(logInSchema),
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { logInUser } = useContext(AuthContext);

  const submitHandler = function (data) {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        logInUser(userCredential._tokenResponse, userCredential.user);
        navigate("/");
      })
      .catch((error) => {
        toast.error("Email or password is wrong!");
      })
      .finally(() => {
        setLoading(false);
      });

    reset({
      email: "",
      password: "",
    });
  };

  return (
    <StyleLoginForm onSubmit={handleSubmit(submitHandler)}>
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
      <button type="submit">
        {loading && <Loading />}
        Submit
      </button>
    </StyleLoginForm>
  );
};

export default LoginForm;

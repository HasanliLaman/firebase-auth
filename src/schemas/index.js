import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format.")
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password length should be between 6 and 15.")
    .max(15, "Password length should be between 6 and 15.")
    .required("This field is required."),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password should be same."
    ),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Wrong email format.")
    .required("This field is required."),
  password: yup
    .string()
    .min(6, "Password length should be between 6 and 15.")
    .max(15, "Password length should be between 6 and 15.")
    .required("This field is required."),
});

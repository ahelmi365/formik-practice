import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
// at least 8 characters, at least 1 uppercase letter, at least 1 lowercase letter, at least 1 number

export const basicSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  age: yup
    .number()
    .min(18, "Must be above 18")
    .max(50, "Must be below 50")
    .required("Age is required"),
    
  email: yup.string().email("Invalid email").required("Email is required"),
  
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      passwordRegex,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
    )
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

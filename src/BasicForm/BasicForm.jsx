import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const submitForm = async (values, actions) => {
  console.log("Submitting");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log(values);
  actions.resetForm();
  console.log("Submitted");
};
function BasicForm() {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    isValid,
    dirty,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      userName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit: submitForm,
  });

  return (
    <>
      <h3>Basic Form</h3>
      <form className="flex-col-center" action="" onSubmit={handleSubmit}>
        <div className="field-container flex-col-start">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.userName && touched.userName ? "input-error" : ""}
            readOnly={isSubmitting}
            placeholder="Your user name"
          />
          {errors.userName && touched.userName && (
            <span className="error">{errors.userName}</span>
          )}
        </div>
        <div className="field-container flex-col-start">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? "input-error" : ""}
            readOnly={isSubmitting}
            placeholder="Your age"
          />
          {errors.age && touched.age && (
            <span className="error">{errors.age}</span>
          )}
        </div>
        <div className="field-container flex-col-start">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
            readOnly={isSubmitting}
            placeholder="Your email"
          />
          {errors.email && touched.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>
        <div className="field-container flex-col-start">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
            readOnly={isSubmitting}
            placeholder="Your password"
          />
          {errors.password && touched.password && (
            <span className="error">{errors.password}</span>
          )}
        </div>
        <div className="field-container flex-col-start">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "input-error"
                : ""
            }
            readOnly={isSubmitting}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button
          className="btn btn-submit"
          disabled={!dirty || !isValid || isSubmitting}
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default BasicForm;

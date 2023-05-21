import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log("Submitting...");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  actions.resetForm();
  console.log("Submitted");
};
function BasicForm() {
  const {
    values,
    touched,
    errors,
    isSubmitting,
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
    onSubmit: onSubmit,
  });

  return (
    <>
      <h3>Basic Form</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className="field-container">
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
          />
          {errors.userName && touched.userName && (
            <p className="error">{errors.userName}</p>
          )}
        </div>
        <div className="field-container">
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
          />
          {errors.age && touched.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="field-container">
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
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>
        <div className="field-container">
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
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <div className="field-container">
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
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button className="btn btn-submit" disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default BasicForm;

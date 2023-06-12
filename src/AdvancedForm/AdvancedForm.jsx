import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import "../App.css"

function AdvancedForm() {
  const userNameRef = React.useRef(null);

  const [initialValues, setInitialValues] = useState({
    userName: "",
    age: "",
    gender: "",
    subjects: [],
    email: "a@d.c",
    password: "P@ssw0rd",
    confirmPassword: "P@ssw0rd",
  });
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("Required"),

    age: Yup.number()
      .required("Required")
      .min(18, "Min = 18")
      .max(99, "Max = 99"),

    gender: Yup.string().required("Select a value").oneOf(["male", "female"]),
    subjects: Yup.array().required().min(1, "Min is 1").max(2, "Max 2"),

    email: Yup.string().required("Required").email("Invalid Email"),

    password: Yup.string()
      .required("Required")
      .min(8, "Min = 8")
      .max(16, "Max = 16")
      .matches(
        passwordRegex,
        "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number"
      ),

    confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  function handleSubmitX(values, actions) {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  }

  return (
    <>
      <h3>Advanced Form</h3>
      <button onClick={() => userNameRef.current.resetForm()}>
        reset form
      </button>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmitX}
      >
        {({ handleSubmit, resetForm, values, isValid, dirty }) => (
          <Form className="flex-col-center" ref={userNameRef}>
            <div className="field-container flex-col-start">
              <label htmlFor="userName">User Name</label>
              <Field name="userName" type="text" placeholder="Your user name" />
              <span className="error">
                <ErrorMessage name="userName" />
              </span>
            </div>

            <div className="field-container flex-col-start">
              <label htmlFor="age">Age</label>
              <Field name="age" type="number" placeholder="Your age" />
              <span className="error">
                <ErrorMessage name="age" />
              </span>
            </div>

            <div className="field-container flex-col-start">
              <div className="gender-field flex-row-center select-container">
                <label htmlFor="gender" className="flex-row-item">
                  Gender
                </label>
                <Field
                  className="flex-row-item"
                  name="gender"
                  as="select"
                  title="gender"
                  aria-label="gender"
                >
                  <option value="-1">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
              </div>
              <span className="error">
                <ErrorMessage name="gender" />
              </span>
            </div>

            <div className="field-container flex-col-start">
              {["Sub1", "Sub2", "Sub3"].map((sub) => (
                <div>
                  <label htmlFor={sub}>{sub}</label>
                  <Field
                    id={sub}
                    name="subjects"
                    type="checkbox"
                    value={sub}
                    readOnly={false}
                  />
                </div>
              ))}
              <span className="error">
                <ErrorMessage name="subjects" />
              </span>
            </div>
            <div className="field-container flex-col-start">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" placeholder="Your email" />
              <span className="error">
                <ErrorMessage name="email" />
              </span>
            </div>

            <div className="field-container flex-col-start">
              <label htmlFor="password">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Your password"
              />
              <span className="error">
                <ErrorMessage name="password" />
              </span>
            </div>

            <div className="field-container flex-col-start">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
              <span className="error">
                <ErrorMessage name="confirmPassword" />
              </span>
            </div>

            <div className="form-buttons flex-row-center">
              {/* Submit Form */}
              <button
                className="btn btn-submit pd-1"
                type="submit"
                disabled={!dirty || !isValid} // < !dirty > means the form has not been touched
              >
                Submit
              </button>

              {/* Reset Form */}
              <button
                type="reset"
                onClick={resetForm}
                className="btn btn-reset"
              >
                Reset Form
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="change-initial-values">
        <button
          className="btn"
          onClick={() => {
            setInitialValues({ ...initialValues, userName: "Ali", age: 60 });
            console.log("changed username");
          }}
        >
          Change initial value
        </button>
      </div>
    </>
  );
}

export default AdvancedForm;

import React, { useState } from "react";
import "./App.css";
import BasicForm from "./BasicForm/BasicForm";
import AdvancedForm from "./AdvancedForm/AdvancedForm";

function App() {
  const [currentForm, setCurrentForm] = useState("basic");
  const handleFormSelection = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <h1>Hello Formik</h1>
      <button
        onClick={() => handleFormSelection("basic")}
        className={`btn btn-basic ${
          currentForm === "basic" ? "active" : "non-active"
        }`}
      >
        Basic Form
      </button>
      <button
        onClick={() => handleFormSelection("advanced")}
        className={`btn btn-advanced ${
          currentForm === "advanced" ? "active" : "not-active"
        }`}
      >
        Advanced Form
      </button>
      {currentForm === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;

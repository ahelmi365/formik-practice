import React, { useState } from "react";
import "./App.css";
import BasicForm from "./BasicForm/BasicForm";
import AdvancedForm from "./AdvancedForm/AdvancedForm";

function App() {
  const [currentForm, setCurrentForm] = useState("basic");

  return (
    <div className="App">
      <h1>Hello Formik</h1>
      <div className="main-tabs flex-row-center">
        <button
          onClick={() => setCurrentForm("basic")}
          className={`btn btn-basic ${
            currentForm === "basic" ? "active" : "non-active"
          }`}
        >
          Basic Form
        </button>
        <button
          onClick={() => setCurrentForm("advanced")}
          className={`btn btn-advanced ${
            currentForm === "advanced" ? "active" : "not-active"
          }`}
        >
          Advanced Form
        </button>
      </div>

      {currentForm === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;

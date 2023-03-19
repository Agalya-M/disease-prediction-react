import React, { useState } from "react";
import GroupInput from "../../Components/groupInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";
import { diabetesInputs } from "../../Utils/utils";

const DiabetesDisease = () => {
  const [diabetesValues, setValues] = useState({
    pregnancies: "",
    glucose: "",
    bloodpressure: "",
    skinthickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const onChange = (inputName, value) => {
    console.log(inputName, value);
    setValues({ ...diabetesValues, [inputName]: value });
  };

  const onSubmit = () => {
    console.log({ diabetesValues });
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Diabetes Prediction</h1>
        </div>
        <div className="input-wrapper">
          <GroupInput
            data={diabetesInputs}
            dataValue={diabetesValues}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default DiabetesDisease;

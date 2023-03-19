import React, { useState } from "react";
import GroupInput from "../../Components/groupInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";
import { heartDieasesInputs } from "../../Utils/utils";

const HeartDisease = () => {
  const [heartDiseaseValues, setValues] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const onChange = (inputName, value) => {
    console.log(inputName, value);
    setValues({ ...heartDiseaseValues, [inputName]: value });
  };

  const onSubmit = () => {
    console.log({ heartDiseaseValues });
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Heart Dieases Prediction</h1>
        </div>
        <div className="input-wrapper">
          <GroupInput
            data={heartDieasesInputs}
            dataValue={heartDiseaseValues}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default HeartDisease;

import React, { useState } from "react";
import GroupInput from "../../Components/groupInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";
import { liverDieasesInput } from "../../Utils/utils";

const LiverDiseasePreduction = () => {
  const [liverDiseaseValues, setValues] = useState({
    Age: "",
    Total_Bilirubin: "",
    Direct_Bilirubin: "",
    Alkaline_Phosphotase: "",
    Alamine_Aminotransferase: "",
    Aspartate_Aminotransferase: "",
    Total_Protiens: "",
    Albumin: "",
    Albumin_and_Globulin_Ratio: "",
    Gender_Male: "",
  });

  const onChange = (inputName, value) => {
    console.log(inputName, value);
    setValues({ ...liverDiseaseValues, [inputName]: value });
  };

  const onSubmit = () => {
    console.log({ liverDiseaseValues });
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Liver Dieases Prediction</h1>
        </div>
        <div className="input-wrapper">
          <GroupInput
            data={liverDieasesInput}
            dataValue={liverDiseaseValues}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default LiverDiseasePreduction;

import React, { useState } from "react";
import GroupInput from "../../Components/groupInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";
import { breastCancerInputs } from "../../Utils/utils";

const BreastCancerDisease = () => {
  const [breastCancerValues, setValues] = useState({
    radius_mean: "",
    texture_mean: "",
    perimeter_mean: "",
    area_mean: "",
    smoothness_mean: "",
    compactness_mean: "",
    concavity_mean: "",
    concave_points_mean: "",
    symmetry_mean: "",
    radius_se: "",
    perimeter_se: "",
    area_se: "",
    compactness_se: "",
    concavity_se: "",
    concave_points_se: "",
    fractal_dimension_se: "",
    radius_worst: "",
    texture_worst: "",
    perimeter_worst: "",
    area_worst: "",
    smoothness_worst: "",
    compactness_worst: "",
    concavity_worst: "",
    concave_points_worst: "",
    symmetry_worst: "",
    fractal_dimension_worst: "",
  });

  const onChange = (inputName, value) => {
    console.log(inputName, value);
    setValues({ ...breastCancerValues, [inputName]: value });
  };

  const onSubmit = () => {
    console.log({ breastCancerValues });
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Breast Cancer Prediction</h1>
        </div>
        <div className="input-wrapper">
          <GroupInput
            data={breastCancerInputs}
            dataValue={breastCancerValues}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default BreastCancerDisease;

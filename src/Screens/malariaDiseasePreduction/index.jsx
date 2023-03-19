import React, { useState } from "react";
import ImageUpload from "../../Components/ImageInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";

const MalariaDiseasePreduction = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://127.0.0.1:5000/malariapredict", {
      // mode: "no-cors",
      method: "POST",
      body: formData,
    }).then((resp) => {
      console.log("res", resp);
      resp.json().then((data) => {
        console.log("malaria pred res => ", data);
        setResult(data.message);
        isLoading(false);
      });
    });
  };

  const onContinue = () => {
    setResult(null);
    setLoading(false);
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Malaria Predictor</h1>
        </div>
        <div className="image-wrapper">
          <ImageUpload
            onSubmit={onSubmit}
            isLoading={isLoading}
            result={result}
            onContinue={onContinue}
            message={[
              "This cell is an Infected Malerial Cell.",
              "This cell is not Infected.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default MalariaDiseasePreduction;

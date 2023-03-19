import React, { useState } from "react";
import ImageUpload from "../../Components/ImageInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";

const PneumoniaPredictor = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("http://127.0.0.1:5000/pneumoniapredict", {
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
          <h1>Pneumonia Predictor</h1>
        </div>
        <div className="image-wrapper">
          <ImageUpload
            onSubmit={onSubmit}
            isLoading={isLoading}
            result={result}
            onContinue={onContinue}
            message={[
              "This X-Ray is predicted to have Pneumonia, Please Consult Doctor.",
              "This X-Ray does not have Pneumonia.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PneumoniaPredictor;

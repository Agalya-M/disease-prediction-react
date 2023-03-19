import React, { useState } from "react";
import GroupInput from "../../Components/groupInput";
import NavBar from "../../Components/Navbar";
import "../../Styles/globelStyles.css";
import { kidneyDieasesInput } from "../../Utils/utils";

const KidneyDisease = () => {
  const [kidneyDiseaseValues, setValues] = useState({
    age: "",
    bp: "",
    al: "",
    su: "",
    rbc: "",
    pc: "",
    pcc: "",
    ba: "",
    bgr: "",
    bu: "",
    sc: "",
    pot: "",
    wc: "",
    htn: "",
    dm: "",
    cad: "",
    pe: "",
    ane: "",
  });

  const onChange = (inputName, value) => {
    console.log(inputName, value);
    setValues({ ...kidneyDiseaseValues, [inputName]: value });
  };

  const onSubmit = () => {
    console.log({ kidneyDiseaseValues });
  };

  return (
    <div className="screen-wrapper-1">
      <NavBar />
      <div className="screen-wrapper-2">
        <div className="title">
          <h1>Kidney Dieases Prediction</h1>
        </div>
        <div className="input-wrapper">
          <GroupInput
            data={kidneyDieasesInput}
            dataValue={kidneyDiseaseValues}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default KidneyDisease;

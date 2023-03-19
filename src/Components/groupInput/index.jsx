import React, { useEffect, useState } from "react";
import "./styles.css";
import _ from "lodash";

const GroupInput = ({ data, dataValue, onChange, onSubmit }) => {
  const [currentId, setId] = useState(0);

  const onPressPrevious = () => {
    setId(currentId - 1);
  };
  const onPressNext = () => {
    setId(currentId + 1);
  };
  const onPressSubmit = () => {
    setId(0);
    onSubmit();
  };

  return (
    <div className="group-input-wrapper" id={data[currentId].id}>
      <input
        name={data[currentId].name}
        value={dataValue[data[currentId].name]}
        onChange={(e) => onChange(data[currentId].name, e.target.value)}
        placeholder={data[currentId].placeholder}
      />
      <div className="button-wrapper">
        <button
          className="input-button"
          onClick={onPressPrevious}
          disabled={currentId === 0}
        >
          Previous
        </button>
        {data[currentId].id !== data.length ? (
          <button className="input-button" onClick={onPressNext}>
            Next
          </button>
        ) : (
          <button className="input-button" onClick={onPressSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default GroupInput;

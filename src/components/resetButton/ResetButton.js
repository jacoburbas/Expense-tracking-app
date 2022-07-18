import React from "react";
import "../../style/resetButton.css";
const ResetButton = () => {
  return (
    <div className="resetButton">
      <button
        id="btn"
        onClick={() => {
          localStorage.removeItem("json");
          window.location.reload(true);
        }}
      >
        Reset your data
      </button>
    </div>
  );
};

export default ResetButton;

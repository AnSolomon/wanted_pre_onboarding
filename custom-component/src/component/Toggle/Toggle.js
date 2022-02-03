import React, { useState } from "react";
import "./Toggle.css";

function Toggle() {
  const [checkState, setCheckState] = useState(false);

  return (
    <div className="toggle-div">
      <label className="toggle-label">
        <input
          className="toggle-input"
          type="checkbox"
          onChange={(e) => {
            setCheckState(e.target.checked);
          }}
        />
        <span className="toggle-ball" />
      </label>
      <h4>{checkState ? "Toggle Switch ON" : "Toggle Switch OFF"}</h4>
    </div>
  );
}

export default Toggle;

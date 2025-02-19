import React, { useState } from "react";

const PasswordInput = ({ value, onChange, required }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="input-group">
      <input
        type={isVisible ? "text" : "password"}
        className="form-control"
        value={value}
        onChange={onChange}
        required={required}
      />
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={toggleVisibility}
      >
        {isVisible ? "🙈" : "👁️"}
      </button>
    </div>
  );
};

export default PasswordInput;

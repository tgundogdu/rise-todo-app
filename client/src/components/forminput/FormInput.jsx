import React from 'react';
import "./forminput.scss";

const FormInput = ({ label, description, error, errorMessage, children }) => {
  return (
    <div className={`o-form-input ${error ? "o-error" : ""}`}>
      {label ? <label className="o-label">{label}</label> : ""}
      {description ? <p className="o-description">{description}</p> : ""}
      {children}
      {errorMessage ? (
        <span className="o-error-message">{errorMessage}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInput;

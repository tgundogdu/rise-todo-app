import React from 'react';
import "./button.scss";

const Button = ({
  children,
  size = "normal",
  appearance = "default",
  ...rest
}) => {
  return (
    <button className={`o-button ${appearance} ${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;

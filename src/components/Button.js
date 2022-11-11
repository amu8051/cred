import React from 'react';
import './Button.css';

const Button = ({ buttonText, onClick, customClass, prefixLogo }) => {
  return (
    <div
      className={`button-container flex center-component ${customClass}`}
      onClick={onClick}
    >
      {prefixLogo} {buttonText}
    </div>
  );
};

export default Button;

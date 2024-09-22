import React from "react";
import './Input.css';
import {InputProps} from "../../../types/interfaces/index";

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className }) => {
  return (
      <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
      />
  );
};

export default Input;

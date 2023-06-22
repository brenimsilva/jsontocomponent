import React from "react";

export interface IRegister {
  key: string;
  value: string;
  keyType: "object" | "array" | "any";
  valueType: "boolean" | "number" | "text" | "any";
}

interface props {
  key: string;
  value: string;
  keyColor: "blue" | "orange" | "green" | "white";
  valueColor: "blue" | "orange" | "green" | "white";
}
export default function Register({ key, keyColor, value, valueColor }: props) {
  return (
    <React.Fragment>
      <p>
        <span className={`text-${keyColor}`}>{key}:</span>
        <span className={`text-${valueColor}`}>{value}</span>
      </p>
    </React.Fragment>
  );
}

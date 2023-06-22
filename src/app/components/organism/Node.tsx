import React from "react";
import Register, { IRegister } from "../singular/Register";
import Card from "../singular/Card";

interface props {
  registers: IRegister[];
}
export default function Node({ registers }: props) {
  return (
    <Card>
      {registers.map((register) => {
        let keyColor: "orange" | "blue" | "white" | "green" = "white";
        let valueColor: "orange" | "blue" | "white" | "green" = "white";
        switch (register.keyType) {
          case "array":
            keyColor = "orange";
            break;
          case "object":
            keyColor = "blue";
            break;
          default:
            keyColor = "white";
            break;
        }
        switch (register.valueType) {
          case "boolean":
            valueColor = "green";
            break;
          case "number":
            valueColor = "orange";
            break;
          default:
            valueColor = "white";
            break;
        }
        return (
          <Register
            key={register.key}
            value={register.value}
            keyColor={keyColor}
            valueColor={valueColor}
          />
        );
      })}
    </Card>
  );
}

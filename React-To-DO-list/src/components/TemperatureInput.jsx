import React from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
export default function TemperatureInput({
  temperature,
  scale,
  onTemperatureChange,
}) {
  return (
    <fieldset>
      <legend>
        <b>Enter The Your {scaleNames[scale]}:</b>
      </legend>
      <input type="text" value={temperature} onChange={(e)=>onTemperatureChange(e,scale)} />
    </fieldset>
  );
}

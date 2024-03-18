import React from "react";
import BoilingVerdict from "./Boilingverdict";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelsius, toFahrenheit } from "../lib/Convert";

export default class Temperature extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  handelChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handelChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handelChange} />
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </div>
    );
  }
}

import { useState } from "react";

function Color() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>I am color {color}!</h1>
      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("Red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("Yellow")}>
        Yellow
      </button>
      <button type="button" onClick={() => setColor("White")}>
        White
      </button>
    </>
  );
}
export default Color;
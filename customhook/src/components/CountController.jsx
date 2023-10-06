/* eslint-disable react/prop-types */
// import { useState } from "react";

import useCounter from "../hooks/useCounter";

const CountController = (props) => {
  const { count, handleInc, handleDec } = useCounter({ ...props });
  return (
    <div>
      <button onClick={handleInc}>+</button>
      <span>{count}</span>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default CountController;

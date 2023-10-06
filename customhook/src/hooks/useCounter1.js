import { useState } from "react";

const useCounter = ({ initial = 0, lowerBound = 0, upperBound = 0 }) => {
  const [count, setCount] = useState(initial);

  const handleInc = () => {
    if (count < upperBound) {
      setCount(count + 1);
    }
  };

  const handleDec = () => {
    if (count > lowerBound) {
      setCount(count - 1);
    }
  };
  return {
    count,
    upperBound,
    lowerBound,
    handleInc,
    handleDec,
  };
};

export default useCounter;

/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Layout from "./Layout";
import UpdateInDec from "./UpdateInDec";
import Button from "./Buttons";
const About = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(10);
  const [decrementValue, setDecrementValue] = useState(5);

  function increment() {
    setCount(count + incrementValue);
  }

  function decrement() {
    setCount(count - decrementValue);
  }

  function handleIncrementChange(event) {
    setIncrementValue(parseInt(event.target.value));
  }

  function handleDecrementChange(event) {
    setDecrementValue(parseInt(event.target.value));
  }

  return (
    <Layout>
      <h1>This My About Counter Page</h1>
      <h3>{count}</h3>
      <UpdateInDec
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
      <Button increment={increment} decrement={decrement} />
    </Layout>
  );
};

export default About;

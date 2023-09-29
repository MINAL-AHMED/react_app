/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductList = ({ name, stock }) => {
  const [count, setScount] = useState(0);
  const increment = () => {
    if (count < stock) {
      setScount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setScount(count - 1);
    }
  };
  return (
    <div>
      <h1>{name}</h1>
      <h1>
        Count: {count}/ {stock}
      </h1>
      <button onClick={increment} disabled={count == stock}>
        Increment
      </button>
      <button onClick={decrement} disabled={count == 0}>
        Decrement
      </button>
    </div>
  );
};
export default ProductList;

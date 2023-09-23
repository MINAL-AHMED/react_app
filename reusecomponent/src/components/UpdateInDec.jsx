/* eslint-disable react/prop-types */
const UpdateInDec = ({
  incrementValue,
  decrementValue,
  handleIncrementChange,
  handleDecrementChange,
}) => {
  return (
    <div>
      <label>Increment</label>
      <input
        type="number"
        value={incrementValue}
        onChange={handleIncrementChange}
      />
      <label>Decrement</label>
      <input
        type="number"
        value={decrementValue}
        onChange={handleDecrementChange}
      />
    </div>
  );
};

export default UpdateInDec;

/* eslint-disable react/prop-types */
const Operations = ({ handleArithmeticOps, handleClearOps }) => {
  return (
    <div>
      <div>
        <p>Operations</p>
        <button onClick={() => handleArithmeticOps("+")}>+</button>
        <button onClick={() => handleArithmeticOps("-")}>-</button>
        <button onClick={() => handleArithmeticOps("*")}>*</button>
        <button onClick={() => handleArithmeticOps("/")}>/</button>
        <button onClick={() => handleArithmeticOps("%")}>%</button>
        <button onClick={handleClearOps}>Clear</button>
      </div>
    </div>
  );
};

export default Operations;

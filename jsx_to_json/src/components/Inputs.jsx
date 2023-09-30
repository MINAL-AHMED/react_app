/* eslint-disable react/prop-types */

const Inputs = ({ handleInputChange, inputState }) => {
  return (
    <div>
      {" "}
      <p>Inputs</p>
      <input
        type="number"
        value={inputState.a}
        onChange={handleInputChange}
        name="a"
      />
      <input
        type="number"
        value={inputState.b}
        onChange={handleInputChange}
        name="b"
      />
    </div>
  );
};

export default Inputs;

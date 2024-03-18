import { useState } from "react";
function MyForm() {
  const [text, MyText] = useState("Please Type");
  const [myCar, setMyCar] = useState("Ferrari");

  const handleChange = (event) => {
    setMyCar(event.target.value);
    MyText(event.target.value)
  };

  return (
    <>
      <form>
        <textarea value={text} onMouseEnter={handleChange} />
        <br />
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
          <option value="Ferrari">Ferrari</option>
        </select>
      </form>
    </>
  );
}
export default MyForm;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = ["Dhaka", "Rajshahi", "Lalpur", "Natore"];
  // const handelSelectItem = (item: string)=>{
  //   console.log(item)
  // }
  const [alertvisible, alertvisibility] = useState(false);
  return (
    <div className="App">
      {/* <ListGroup  items={items} heading={"cities:"} onSelectItem={handelSelectItem}/> */}
      {alertvisible && (
        <Alert onClose={() => alertvisibility(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button>
        <h6 color="primary" onClick={() => alertvisibility(true)}>
          My Button
        </h6>
      </Button>
    </div>
  );
}

export default App;

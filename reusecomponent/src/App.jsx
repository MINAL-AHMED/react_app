import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";
import Home from "./components/Home";
import ClockPage from "./components/ClockPage";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/clock" element={<ClockPage />} />
      </Routes>
    </div>
  );
};

export default App;

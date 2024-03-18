import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pagess/Layout";
import Home from "./Pagess/Home";
import Blogs from "./Pagess/Blogs";
import Contact from "./Pagess/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

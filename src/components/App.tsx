import "./App.css";
import Overview from "../Pages/Overview";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Personal from "../Pages/Personal";
import CraterGallery from "../Pages/CraterGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/about" element={<About />} />
          <Route path="CraterGallery" element={<CraterGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ApexEdu from "./pages/ApexEdu";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Calculator from "./pages/calculator";
import Pricing from "./pages/pricing";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ApexEdu" element={<ApexEdu />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

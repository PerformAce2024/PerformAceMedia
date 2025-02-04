import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creatives from "./pages/Creatives";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/creatives" element={<Creatives />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

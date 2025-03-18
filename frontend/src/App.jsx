import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creatives, {
  AmazonMini,
  Audiencex,
  Hsbc,
  Hyundai,
  Movie,
  Nativehub,
  RoyalEnfield,
  Tropicana,
  VideoPlayer,
  VisionTV,
} from "./pages/Creatives";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/creatives" element={<Creatives />}>
          <Route
            index
            element={
              <VideoPlayer videoUrl="https://pagedone.io/asset/uploads/1705298724.mp4" />
            }
          />
          <Route path="amazon-mini" element={<AmazonMini />} />
          <Route path="movie" element={<Movie />} />
          <Route path="hsbc" element={<Hsbc />} />
          <Route path="tropicana" element={<Tropicana />} />
          <Route path="visionTV" element={<VisionTV />} />
          <Route path="nativehub" element={<Nativehub />} />
          <Route path="audience-X" element={<Audiencex />} />
          <Route path="royal-enfield" element={<RoyalEnfield />} />
          <Route path="hyundai" element={<Hyundai />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

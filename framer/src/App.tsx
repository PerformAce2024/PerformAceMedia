import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PAAdvance from "./pages/PAAdvance";
import VisionTV from "./pages/VisionTV";
import NativeHub from "./pages/NativeHub";
import InsightX from "./pages/InsightX";
import Partners from "./pages/Partners";
import AudienceX from "./pages/AudienceX";
import Navbar from "./layout/Navbar";

function App() {
  const routes = [
    { name: "AudienceX", path: "/audienceX" },
    { name: "PA AdVance", path: "/paadvance" },
    { name: "VisionTV", path: "/visiontv" },
    { name: "NativeHUB", path: "/nativehub" },
    { name: "InsightX", path: "/insightx" },
    { name: "Partners", path: "/partners" },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paadvance" element={<PAAdvance />} />
          <Route path="/visiontv" element={<VisionTV />} />
          <Route path="/nativehub" element={<NativeHub />} />
          <Route path="/insightx" element={<InsightX />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/audienceX" element={<AudienceX />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

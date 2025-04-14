import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import InsightX from "./pages/InsightX";

import AudienceX from "./pages/AudienceX";
import Navbar from "./layout/Navbar";
import VisionTV from "./pages/VisionTV";
import NativeHub from "./pages/NativeHub";
import ScrollToTop from "./components/custom/ScrolltoTop";

function App() {
  const routes = [
    { name: "InsightX", path: "/insightx" },
    { name: "VisionTV", path: "/visiontv" },
    { name: "AudienceX", path: "/audienceX" },
    { name: "NativeHub", path: "/nativehub" },
    { name: "AdVance", path: "/paadvance" },
    { name: "Partners", path: "/partners" },
  ];

  // Create a ComingSoon component for disabled routes
  const ComingSoon = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-xl">This feature is currently under development.</p>
    </div>
  );

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audienceX" element={<AudienceX />} />
          <Route path="/insightx" element={<InsightX />} />

          {/* Disabled routes - redirect to ComingSoon */}
          <Route path="/paadvance" element={<ComingSoon />} />
          <Route path="/visiontv" element={<VisionTV />} />
          <Route path="/nativehub" element={<NativeHub />} />
          <Route path="/partners" element={<ComingSoon />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

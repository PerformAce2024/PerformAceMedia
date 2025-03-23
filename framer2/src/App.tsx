import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import InsightX from "./pages/InsightX";

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
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audienceX" element={<AudienceX />} />
          <Route path="/insightx" element={<InsightX />} />

          {/* Disabled routes - redirect to ComingSoon */}
          <Route path="/paadvance" element={<ComingSoon />} />
          <Route path="/visiontv" element={<ComingSoon />} />
          <Route path="/nativehub" element={<ComingSoon />} />
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

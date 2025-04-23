import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";

import InsightX from "./pages/InsightX";

import AudienceX from "./pages/AudienceX";
import VisionTV from "./pages/VisionTV";
import NativeHub from "./pages/NativeHub";
import ScrollToTop from "./components/custom/ScrolltoTop";
import Creatives from "./pages/Creatives";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LayoutWrapper from "./layout/LayoutWrapper";

function App() {
  const videoCreatives = {
    CTV: {
      FMCG: [
        {
          name: "Cadbury",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/fmcg/cadbury.mp4",
        },
        {
          name: "Frooti",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/fmcg/Frooti.mp4",
        },
      ],
      Ecommerce: [
        {
          name: "Myntra",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/ecommerce/myntra.mp4",
        },
      ],
      Automobiles: [
        {
          name: "BMW",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/automobile/bmw.mp4",
        },
        {
          name: "Honda",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/automobile/honda.mp4",
        },
      ],
      jewellery: [
        {
          name: "Tanishq  ",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/jewellery/Ahalya+by+Tanishq_2_1.mp4",
        },
        {
          name: "Kalyan",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/jewellery/kalyan.mp4",
        },
      ],
      retail: [
        {
          name: "Lakme",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/retail/Lakme.mp4",
        },
        {
          name: "Pizza Hut",
          url: "https://pacreatives.s3.ap-south-1.amazonaws.com/retail/pizzahut.mp4",
        },
      ],
    },
    Electronics: {
      Smartphones: [
        {
          name: "iPhone 15 Pro",
          url: "https://example.com/videos/iphone15.mp4",
        },
        {
          name: "Samsung Galaxy S23",
          url: "https://example.com/videos/galaxy.mp4",
        },
      ],
      Laptops: [
        { name: "MacBook Pro", url: "https://example.com/videos/macbook.mp4" },
        { name: "Dell XPS", url: "https://example.com/videos/dell.mp4" },
      ],
    },
    Fashion: {
      "Men's Wear": [
        {
          name: "Summer Collection",
          url: "https://example.com/videos/mensummer.mp4",
        },
        {
          name: "Winter Collection",
          url: "https://example.com/videos/menwinter.mp4",
        },
      ],
      "Women's Wear": [
        {
          name: "Casual Collection",
          url: "https://example.com/videos/womencasual.mp4",
        },
        {
          name: "Formal Collection",
          url: "https://example.com/videos/womenformal.mp4",
        },
      ],
      Accessories: [
        { name: "Watches", url: "https://example.com/videos/watches.mp4" },
        { name: "Bags", url: "https://example.com/videos/bags.mp4" },
      ],
    },
  };
  const routes = [
    { name: "InsightX", path: "/insightx" },
    { name: "VisionTV", path: "/visiontv" },
    { name: "AudienceX", path: "/audienceX" },
    { name: "NativeHub", path: "/nativehub" },
    { name: "AdVance", path: "/paadvance" },
    { name: "Partners", path: "/partners" },
    { name: "creatives", path: "/creatives" },
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
        <LayoutWrapper routes={routes}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/audienceX" element={<AudienceX />} />
            <Route path="/insightx" element={<InsightX />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/paadvance" element={<ComingSoon />} />
            <Route path="/visiontv" element={<VisionTV />} />
            <Route
              path="/creatives"
              element={<Creatives creatives={videoCreatives} />}
            />
            <Route path="/nativehub" element={<NativeHub />} />
            <Route path="/partners" element={<ComingSoon />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;

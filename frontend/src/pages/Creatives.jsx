import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import PhoneMockup from "../components/Phonemockup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TropicanaAd from "../components/Tropicana";
import AmazonMiniTv from "../components/Amazonminitv";
import MovieAd from "../components/Movie";
import HSBCAd from "../components/Hsbc";
import NativeHub from "../components/Nativehub";
import AudienceX from "../components/AudienceX";
import { Outlet, useNavigate } from "react-router-dom";
import Visiontv from "../components/Visiontv";
// import FashionAd from "../components/Fashion";
// Create components for different content
export const VideoPlayer = ({ videoUrl }) => (
  <div className="flex-1 flex justify-center items-center p-4">
    <video className="max-w-full max-h-[70vh] shadow-lg rounded-lg" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

// const Fashion = () => (
//   <div className="flex-1 flex justify-center items-center p-4">
//     <PhoneMockup>
//       <FashionAd />
//     </PhoneMockup>
//   </div>
// );

export const AmazonMini = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <AmazonMiniTv />
    </PhoneMockup>
  </div>
);
export const VisionTV = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <Visiontv />
  </div>
);
export const Movie = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <MovieAd />
    </PhoneMockup>
  </div>
);
export const Hsbc = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <HSBCAd />
    </PhoneMockup>
  </div>
);

export const Tropicana = () => {
  return (
    <div className="flex-1 flex justify-center items-center p-4">
      <PhoneMockup>
        <TropicanaAd />
      </PhoneMockup>
    </div>
  );
};
export const Nativehub = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <NativeHub />
  </div>
);
export const Audiencex = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <AudienceX />
  </div>
);

export const RoyalEnfield = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <Carousel showThumbs={false}>
        <div>
          <img
            src="/royalenfield/re.gif"
            alt="Fashion 1"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </PhoneMockup>
  </div>
);

export const Hyundai = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <Carousel showThumbs={true} infiniteLoop autoPlay>
        <div>
          <img
            src="/hyundai/1.jpg"
            alt="Fashion 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/hyundai/2.jpg"
            alt="Fashion 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/hyundai/3.jpg"
            alt="Fashion 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </PhoneMockup>
  </div>
);
export default function Creatives() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleContentSelect = (content) => {
    navigate(`/creatives/${content}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex min-h-screen pt-[100px]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          onSelect={handleContentSelect}
        />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

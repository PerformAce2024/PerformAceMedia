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
import { Outlet, useNavigate } from "react-router-dom";
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
export const Innovation = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img
            src="/fashion-1.jpg"
            alt="Fashion 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fashion-2.jpg"
            alt="Fashion 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fashion-3.jpg"
            alt="Fashion 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </PhoneMockup>
  </div>
);
export const InnovationBarcode = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <PhoneMockup>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        <div>
          <img
            src="/fashion-1.jpg"
            alt="Fashion 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fashion-2.jpg"
            alt="Fashion 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/fashion-3.jpg"
            alt="Fashion 3"
            className="w-full h-full object-cover"
          />
        </div>
      </Carousel>
    </PhoneMockup>
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

  return (
    <div className="min-h-screen">
      <Navbar className="z-50" />
      <div className="flex min-h-screen pt-[100px]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
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

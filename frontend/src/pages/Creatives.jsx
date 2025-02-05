import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import PhoneMockup from "../components/Phonemockup";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Create components for different content
const VideoPlayer = ({ videoUrl }) => (
  <div className="flex-1 flex justify-center items-center p-4">
    <video className="max-w-full max-h-[70vh] shadow-lg rounded-lg" controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Fashion = () => (
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

const AmazonMini = () => (
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
const Movie = () => (
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
const Hsbc = () => (
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

const Tropicana = () => (
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
const Innovation = () => (
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
const InnovationBarcode = () => (
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

const RoyalEnfield = () => (
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

const Hyundai = () => (
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
  const [selectedContent, setSelectedContent] = useState("default");

  const renderContent = () => {
    switch (selectedContent) {
      case "fashion":
        return <Fashion />;
      case "amazon-mini":
        return <AmazonMini />;
      case "movie":
        return <Movie />;
      case "hsbc":
        return <Hsbc />;
      case "tropicana":
        return <Tropicana />;
      case "innovation":
        return <Innovation />;
      case "innovation-barcode":
        return <InnovationBarcode />;
      case "royal-enfield":
        return <RoyalEnfield />;
      case "hyundai":
        return <Hyundai />;
      case "default":
      default:
        return (
          <VideoPlayer videoUrl="https://pagedone.io/asset/uploads/1705298724.mp4" />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar className="z-50" />
      <div className="flex min-h-screen pt-[100px]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelect={setSelectedContent}
        />
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}

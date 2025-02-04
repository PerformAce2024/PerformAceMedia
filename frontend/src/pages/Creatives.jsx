import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

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
    <h2>Fashion Content</h2>
  </div>
);

const AmazonMini = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>Amazon Mini Content</h2>
  </div>
);
const Movie = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>Movie Content</h2>
  </div>
);
const Hsbc = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>HSBC</h2>
  </div>
);

const Tropicana = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>Tropicana Content</h2>
  </div>
);
const Innovation = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>innovation conetne</h2>
  </div>
);
const InnovationBarcode = () => (
  <div className="flex-1 flex justify-center items-center p-4">
    <h2>innovatin barcode conet</h2>
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

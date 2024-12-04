import PA from '../assets/PA.png';
import PN from '../assets/PN.png';
import PV from '../assets/PV.png';
import PC from '../assets/PC.png';
import PAD from '../assets/PAD.png';

const MarketingLayout = () => {
  // Define image paths for each section
  const images = [
    PA,
    PN,
    PV,
    PC,
    PAD
  ];

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto ">
      <h1 className="text-[48px] font-bold text-gray-800 mb-12 text-center mt-24">
        Better Digital Marketing sets you apart !
      </h1>
      {images.map((imagePath, index) => (
        <div 
          key={index}
          className="relative w-full h-[503px] overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={imagePath} // Replace these with your actual image paths
            alt={`Marketing Section ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MarketingLayout;
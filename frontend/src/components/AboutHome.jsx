import image from '../assets/aboutus.png'

const DiscoverSection = () => {
  return (
    <div className="w-full py-16 text-center bg-[#F8FBFF] mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-[64px] font-bold text-navy-900 mb-4">
          Discover PerformAce
        </h1>
        <p className="text-gray-600 mb-8 text-[20px] max-w-3xl mx-auto">
          At PerformAce we are more than just a digital consulting company we are your strategic partner in achieving digital success. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the ever-evolving digital landscape.
        </p>
        
        <button className="bg-red-500 text-white px-8 py-3 rounded-full font-medium hover:bg-red-600 transition-colors mb-16">
          Get Started Today
        </button>

        <div className="w-[1000px]">
          <img 
            src={image} 
            alt="PerformAce Team" 
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
import image from "../assets/contact.png"

const LandingPage = () => {
  return (
    <div className="bg-[#F8FBFF] flex flex-col items-center px-4 pt-8">
      <div className="w-full text-center space-y-6 mt-24">
        <h1 className="text-4xl md:text-[64px] font-bold text-navy-900 leading-tight">
          Slide Into Our DMs, Let&apos;s Build<br />
          Something Epic Together
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600">
          Drive Results, Maximize ROI, and Accelerate Growth with PerformAce
        </p>
        
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
          Explore Our Services
        </button>
        
        <div className="flex justify-center">
          <img 
            src={image}
            alt="Mechanical gears representing collaboration"
            className="w-[900px] h-[400px] object-contain mix-blend"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
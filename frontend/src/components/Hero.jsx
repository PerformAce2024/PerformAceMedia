import banner from "../assets/banner.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#F8FBFF] mt-[62px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E2851] leading-tight">
            Unlock the Power of Digital
            <br /> 
            Advertising
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Drive Results, Maximize ROI, and Accelerate Growth with PerformAce
          </p>
          
          <button className="mt-8 bg-[#FF2D55] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#FF1744] transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>

        <div className="mt-10 relative w-full flex justify-center items-center">
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <img 
              src={banner}
              alt="Digital Marketing Dashboard"
              className="h-[400px] w-[860px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

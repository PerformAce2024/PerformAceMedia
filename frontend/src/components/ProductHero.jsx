import image from "../assets/ProductHome.png";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FBFF] flex flex-col items-center justify-start pt-20 px-4">
      <div className=" w-full text-center mt-16">
        <h1 className="text-4xl md:text-[60px] font-bold text-black leading-tight mb-2">
          Unleash Innovation, Transforming
          <br />
          Ideas into Impactful Solutions
        </h1>
        <p className="text-lg md:text-xl text-black ">
          Drive Results, Maximize ROI, and Accelerate Growth with PerformAce
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 mt-8">
          Get Started Today
        </button>
        <div className="flex justify-center items-center w-full">
      <div className="w-[809px] h-[450px] relative rounded-lg overflow-hidden">
        <img 
          src={image}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
      </div>
    </div>
  );
};

export default LandingPage;
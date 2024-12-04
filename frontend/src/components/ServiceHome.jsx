import megaphoneImage from "../assets/Service.png"; // Replace with the actual path to your image

const Expertise = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[40px] md:text-[64px] font-bold text-gray-900 leading-tight">
          Driving Success Through Our
          <br />
          Expertise
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 text-lg mt-4">
          Drive Results, Maximize ROI, and Accelerate Growth with PerformAce
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6">
          <button className="bg-red-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>

        {/* Image */}
        <div className=" mt-4">
          <img
            src={megaphoneImage}
            alt="Megaphone"
            className="h-[400px] w-[900px] mx-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;

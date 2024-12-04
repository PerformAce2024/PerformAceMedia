
import image1 from "../assets/first.png"; 
import image2 from "../assets/second.png";  
import image3 from "../assets/third.png";  

const Second = () => {
  return (
    <div className="flex flex-col items-center px-4 py-3">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
      <span className="text-[#767475]">How We </span><span className="text-black-600">Deliver Results</span> <span className="text-[#767475]">That Matter</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mt-20">
        {/* Image 1 */}
        <div className="h-[450px] w-full overflow-hidden rounded-lg ">
          <img
            src={image1}
            alt="Cutting-Edge Technology"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 2 */}
        <div className="h-[450px] w-full overflow-hidden rounded-lg ">
          <img
            src={image2}
            alt="Extensive Network"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 3 */}
        <div className="h-[450px] w-full overflow-hidden rounded-lg ">
          <img
            src={image3}
            alt="Tailored Solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Second;

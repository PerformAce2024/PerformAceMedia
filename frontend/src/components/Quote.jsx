
const Quote = () => {
  return (
    <section className="w-full bg-[#F8FBFF] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mt-20">
        {/* Title */}
        <h2 className="text-6xl font-bold text-gray-900">
          Request a Quote
        </h2>
        <p className="text-[#FF2D46] text-[30px] mt-5">
          Ready to take the next step?
        </p>

        {/* Description */}
        <p className="text-gray-600 mt-5 text-[16px]">
          Contact us today to request a personalized quote for your digital marketing needs. Our team will be happy to discuss your requirements, provide pricing information, and tailor a solution that meets your business goals.
        </p>

        {/* Input Field and Button */}
        <div className="mt-8 flex justify-center items-center h-[58px]">
          <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter your number"
              className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;

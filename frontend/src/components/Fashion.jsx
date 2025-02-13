import { useEffect, useState } from "react";

// First, define CSS-in-JS styles for the images
const styles = {
  // Add your image URLs here
  mainBackground: {
    backgroundImage: 'url("/fashion/adscreen.png")',
    backgroundSize: "100%",
    backgroundPosition: "bottom center",
  },
  img1: {
    backgroundImage: 'url("/fashion/img1.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  txt1: {
    backgroundImage: 'url("/fashion/txt1.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  slide1: {
    backgroundImage: 'url("/fashion/slide1.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  slide2: {
    backgroundImage: 'url("/fashion/slide2.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  slide3: {
    backgroundImage: 'url("/fashion/slide3.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  slide4: {
    backgroundImage: 'url("/fashion/slide4.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },

  cta: {
    backgroundImage: 'url("/fashion/cta.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  txt2: {
    backgroundImage: 'url("/fashion/txt2.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
  tnc: {
    backgroundImage: 'url("/fashion/t&c.png")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  },
};

const FashionAd = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [slides] = useState([1, 2, 3, 4]);
  const [showTxt1, setShowTxt1] = useState(false);
  const [showWhiteBg, setShowWhiteBg] = useState(false);
  const [isImg1Animated, setIsImg1Animated] = useState(false);

  useEffect(() => {
    // Initial animations
    setTimeout(() => {
      setIsImg1Animated(true);
      setShowWhiteBg(true);
      setTimeout(() => {
        setShowTxt1(true);
      }, 1200);
    }, 1000);

    // Auto slide timer
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleOutboundClick = () => {
    window.open("https://sencogoldanddiamonds.com/", "_blank");
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      {/* Ad Close Button */}
      <div className="absolute top-0 right-0 w-12 h-9 z-10">
        <button className="absolute right-2.5 top-3 w-5 h-5 text-2xl">
          &times;
        </button>
      </div>

      {/* Main Ad Content */}
      <div className="absolute inset-0" style={styles.mainBackground}>
        {/* Image 1 */}
        <div
          className={`absolute w-[90%] right-[5%] bottom-0 transition-all duration-1000 
            ${isImg1Animated ? "w-[56%] right-[-4%] bottom-[31%]" : ""}`}
          style={styles.img1}
        >
          <div className="pb-[173%]"></div>
        </div>

        {/* Text 1 */}
        <div
          className={`absolute w-[54%] top-[4%] left-[2%] opacity-0 
            ${showTxt1 ? "animate-fadeIn" : "hidden"}`}
          style={styles.txt1}
        >
          <div className="pb-[93%]"></div>
        </div>

        {/* White Background Section */}
        <div
          className={`absolute w-full bottom-[-35%] bg-white 
            ${showWhiteBg ? "animate-slideUp" : "hidden"}`}
        >
          {/* Slider */}
          <div className="absolute w-[90%] top-[13%] left-0 right-0 mx-auto">
            <div className="absolute top-0 w-[82%] h-[56%] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={slide}
                  style={styles[`slide${slide}`]}
                  className={`absolute inset-0 transition-transform duration-500 ease-out
                    ${
                      index === currentSlide
                        ? "translate-x-0"
                        : index < currentSlide
                        ? "-translate-x-full"
                        : "translate-x-full"
                    }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute top-[44%] left-0 right-0 flex justify-center space-x-1.5">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-1.5 rounded-[19px] border border-black
                    ${index === currentSlide ? "bg-black" : "bg-white"}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevSlide}
              className="absolute left-2.5 top-[35%] w-7.5 h-11 rotate-180"
              style={styles.arrowLeft}
            />
            <button
              onClick={handleNextSlide}
              className="absolute right-2.5 top-[35%] w-7.5 h-11"
              style={styles.arrowRight}
            />
          </div>

          {/* CTA Button */}
          <div
            className="absolute w-[40%] top-[63%] left-0 right-0 mx-auto"
            style={styles.cta}
          >
            <div className="pb-[24%]"></div>
          </div>

          {/* Text 2 */}
          <div
            className="absolute w-[90%] bottom-[8%] left-0 right-0 mx-auto"
            style={styles.txt2}
          >
            <div className="pb-[4%]"></div>
          </div>

          {/* T&C */}
          <div
            className="absolute w-[5px] right-[1%] bottom-[24%]"
            style={styles.tnc}
          >
            <div className="pb-[532%]"></div>
          </div>
        </div>

        {/* Outbound Link Area */}
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={handleOutboundClick}
        />
      </div>
    </div>
  );
};

export default FashionAd;

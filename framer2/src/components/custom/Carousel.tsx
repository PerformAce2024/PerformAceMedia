import { useEffect, useRef, useState } from "react";
import { CardSecond } from "./Card2";

export function Carousel() {
  const cards = [
    {
      imageSrc: "/Frame1.png",
      title: "Expertise",
      description:
        "With a team of seasoned professionals and industry experts, we have the knowledge and experience to deliver results that matter.",
      titleColor: "#AF52DE",
    },
    {
      imageSrc: "/frame2.png",
      title: "Innovation",
      description:
        "We stay ahead of the curve by leveraging the latest technologies and trends to ensure your campaigns are cutting-edge and impactful.",
      titleColor: "#528ADE",
    },
    {
      imageSrc: "/frame3.png",
      title: "Transparency",
      description:
        "Transparency is at the heart of everything we do. We believe in open communication and providing clear insights into the performance of your campaigns.",
      titleColor: "#52D9DE",
    },
    {
      imageSrc: "/frame4.png",
      title: "Collaboration",
      description:
        "We view our clients as partners and work closely with you to understand your goals and objectives, developing customized strategies that drive maximum value.",
      titleColor: "#60DE52",
    },
    {
      imageSrc: "/frame5.png",
      title: "Customization",
      description:
        "We understand that every business is unique. That's why we tailor our strategies to align with your specific goals, ensuring maximum effectiveness.",
      titleColor: "#CEDE52",
    },
    {
      imageSrc: "/frame6.png",
      title: "Improvement",
      description:
        "We are constantly refining our strategies and techniques to stay ahead of the curve and deliver optimal results for your business.",
      titleColor: "#DEAD52",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxScrollIndex, setMaxScrollIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [cardWidth, setCardWidth] = useState(300);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const sectionRef = useRef(null);

  // Animation states
  const [ballSize, setBallSize] = useState(0);
  const [textWhite, setTextWhite] = useState(false);

  useEffect(() => {
    const updateCarouselDimensions = () => {
      const containerWidth = window.innerWidth;

      // Responsive card width based on screen size
      let newCardWidth = 300; // Default card width for mobile
      let newVisibleCards = 1;

      if (containerWidth >= 1280) {
        // XL screens
        newCardWidth = 331;
        newVisibleCards = 3;
      } else if (containerWidth >= 1024) {
        // Large screens
        newCardWidth = 331;
        newVisibleCards = 3;
      } else if (containerWidth >= 768) {
        // Medium screens
        newCardWidth = 320;
        newVisibleCards = 2;
      } else if (containerWidth >= 640) {
        // Small screens
        newCardWidth = 300;
        newVisibleCards = 2;
      }

      setCardWidth(newCardWidth);
      setVisibleCards(newVisibleCards);

      // Calculate max scroll index based on number of visible cards
      const maxIndex = Math.max(0, cards.length - newVisibleCards);
      setMaxScrollIndex(maxIndex);
    };

    updateCarouselDimensions();
    window.addEventListener("resize", updateCarouselDimensions);

    // Add scroll event listener to track scroll position
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the section is from entering the viewport
      // When rect.top equals windowHeight, the section is just about to enter
      // When rect.top is 0, the section is at the top of the viewport
      // When rect.top is negative, the section has scrolled up

      // Create a scroll progress value from 0 to 1
      // 0 = section just entering viewport from bottom
      // 1 = section fully visible (or scrolled past top of viewport)
      let scrollProgress = 0;

      if (rect.top <= windowHeight) {
        // Calculate progress as section enters viewport
        scrollProgress = Math.min(1, 1 - rect.top / windowHeight);

        // Scale the circle size based on scroll progress
        const maxSize = Math.max(window.innerWidth, window.innerHeight) * 2;
        const newSize = scrollProgress * maxSize;
        setBallSize(newSize);

        // Toggle text color when ball gets large enough
        setTextWhite(scrollProgress > 0.5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("resize", updateCarouselDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cards.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxScrollIndex ? maxScrollIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrev();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="relative w-full mx-auto py-4 md:py-8 overflow-hidden bg-secondary"
    >
      {/* Animated expanding black ball - positioned at top of section */}
      <div
        className="absolute rounded-full bg-black opacity-90 transition-all duration-700 ease-out"
        style={{
          width: `${ballSize}px`,
          height: `${ballSize}px`,
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative px-4 md:px-6 z-10">
        <div className="m-2 sm:m-4 md:m-5">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center transition-colors duration-500 ${
              textWhite ? "text-white" : "text-accent"
            }`}
          >
            Why We're the Right Partner for Your Growth!
          </h2>
        </div>

        {/* Carousel container with overflow */}
        <div
          className="overflow-hidden w-full z-10"
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="flex-shrink-0 pr-4"
                style={{
                  width: `${cardWidth}px`,
                  height: `${window.innerWidth < 640 ? "280px" : "309px"}`,
                }}
              >
                <CardSecond
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  titleColor={card.titleColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center mt-4 md:mt-8 gap-2 md:gap-4 relative z-10">
        <button
          onClick={handlePrev}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all ${
            currentIndex <= 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
          disabled={currentIndex <= 0}
          aria-label="Previous slide"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="#FF0029" />
            <path
              d="M15 20H25M25 20L21 16M25 20L21 24"
              stroke="#FF0029"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all ${
            currentIndex >= maxScrollIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
          disabled={currentIndex >= maxScrollIndex}
          aria-label="Next slide"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="20" cy="20" r="19.5" fill="white" stroke="#FF0029" />
            <path
              d="M15 20H25M25 20L21 16M25 20L21 24"
              stroke="#FF0029"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dot indicators for mobile and tablet */}
      <div className="flex justify-center mt-2 md:mt-4 gap-1 md:gap-2 relative z-10">
        {Array.from({ length: maxScrollIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === idx
                ? `w-4 md:w-6 ${textWhite ? "bg-white" : "bg-gray-800"}`
                : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Call to action section */}
      <div className="flex flex-col items-center mt-8 md:mt-12 mb-4 md:mb-8 px-4 md:px-0 relative z-10">
        <div
          className={`rounded-lg px-4 md:px-8 py-3 md:py-4 mb-4 md:mb-6 w-full max-w-md shadow-md transition-colors duration-500 ${
            textWhite ? "bg-red-900" : "bg-red-100"
          }`}
        >
          <p
            className={`text-center font-bold text-lg md:text-xl transition-colors duration-500 ${
              textWhite ? "text-white" : "text-red-500"
            }`}
          >
            Ready to take the next step?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-md shadow-md rounded-full overflow-hidden">
          <input
            type="tel"
            placeholder="Enter your number"
            className="w-full bg-black px-4 py-3 sm:py-0 text-white outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 sm:px-10 sm:py-4 font-medium transition-colors whitespace-nowrap">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

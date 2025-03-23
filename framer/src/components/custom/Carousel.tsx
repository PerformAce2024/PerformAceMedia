import { useState, useEffect } from "react";
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

  useEffect(() => {
    const calculateMaxScroll = () => {
      const containerWidth = window.innerWidth;
      const cardWidth = 331; // Width of each card
      const visibleCards = Math.floor(containerWidth / cardWidth);
      const maxIndex = Math.max(0, cards.length - visibleCards);
      setMaxScrollIndex(maxIndex);
    };

    calculateMaxScroll();
    window.addEventListener("resize", calculateMaxScroll);
    return () => window.removeEventListener("resize", calculateMaxScroll);
  }, [cards.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= maxScrollIndex ? maxScrollIndex : prevIndex + 1
    );
  };

  return (
    <div className="relative bg-secondary w-full mx-auto py-8 overflow-hidden">
      <div className="relative">
        <div className="m-5">
          <h2 className="text-accent text-5xl font-bold text-center">
            Why We're the Right Partner for Your Growth !
          </h2>
        </div>
        {/* Carousel container with overflow */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 331}px)`, // 331px is the card width
            }}
          >
            {cards.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="flex-shrink-0 pr-4"
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

      {/* Navigation arrows below the cards */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            currentIndex <= 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
          disabled={currentIndex <= 0}
        >
          <svg
            width="40"
            height="40"
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
          className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${
            currentIndex >= maxScrollIndex
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-80"
          }`}
          disabled={currentIndex >= maxScrollIndex}
        >
          <svg
            width="40"
            height="40"
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

      {/* Simple dot indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: maxScrollIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === idx ? "w-6 bg-gray-800" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Call to action section */}
      <div className="flex flex-col items-center mt-12 mb-8">
        <div className="bg-red-100 rounded-lg px-8 py-4 mb-6 w-full max-w-md shadow-md">
          <p className="text-center font-bold text-red-500 text-xl">
            Ready to take the next step?
          </p>
        </div>

        <div className="flex w-3xl shadow-md rounded-full overflow-hidden">
          <input
            type="tel"
            placeholder="Enter your number"
            className="w-full bg-black px-6  text-white outline-none"
          />
          <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 font-medium transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}

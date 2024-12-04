import { useState, useEffect } from "react";
import Card from "./Card";
import image1 from "../assets/Frame1.png";
import image2 from "../assets/Frame2.png";
import image3 from "../assets/Frame3.png";
import image4 from "../assets/Frame4.png";
import image5 from "../assets/Frame5.png";
import image6 from "../assets/Frame6.png";

const Third = () => {
  const cards = [
    {
      imageSrc: image1,
      title: "Expertise",
      description:
        "With a team of seasoned professionals and industry experts, we have the knowledge and experience to deliver results that matter.",
      titleColor: "#AF52DE",
    },
    {
      imageSrc: image2,
      title: "Innovation",
      description:
        "We stay ahead of the curve by leveraging the latest technologies and trends to ensure your campaigns are cutting-edge and impactful.",
      titleColor: "#528ADE",
    },
    {
      imageSrc: image3,
      title: "Transparency",
      description:
        "Transparency is at the heart of everything we do. We believe in open communication and providing clear insights into the performance of your campaigns.",
      titleColor: "#52D9DE",
    },
    {
      imageSrc: image4,
      title: "Collaboration",
      description:
        "We view our clients as partners and work closely with you to understand your goals and objectives, developing customized strategies that drive maximum value.",
      titleColor: "#60DE52",
    },
    {
      imageSrc: image5,
      title: "Customization",
      description:
        "We understand that every business is unique. That's why we tailor our strategies to align with your specific goals, ensuring maximum effectiveness.",
      titleColor: "#CEDE52",
    },
    {
      imageSrc: image6,
      title: "Improvement",
      description:
        "We are constantly refining our strategies and techniques to stay ahead of the curve and deliver optimal results for your business.",
      titleColor: "#DEAD52",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1000) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 px-4">
      <div className="relative flex items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-3 rounded-full  hover:bg-gray-300 transition-all transform -translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M1.66309 0.999176L10.9971 10.3332L1.66309 19.6672"
              stroke="#19213D"
              strokeWidth="2.5"
              strokeMiterlimit="10"
            />
          </svg>
        </button>

        <div className="w-full overflow-hidden px-8 mt-20">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-transform duration-500"
          >
            {cards.slice(currentIndex, currentIndex + itemsPerView).map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="w-full px-2"
              >
                <Card
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                  titleColor={card.titleColor}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-3 rounded-full hover:bg-gray-300 transition-all transform translate-x-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
          >
            <path
              d="M1.66309 0.999176L10.9971 10.3332L1.66309 19.6672"
              stroke="#19213D"
              strokeWidth="2.5"
              strokeMiterlimit="10"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Third;
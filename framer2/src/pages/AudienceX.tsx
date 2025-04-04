import { Card } from "@/components/custom/Card";
import GradientCards from "@/components/custom/Gradient";
import Footer from "@/layout/Footer";
import UseCasesLayout from "@/layout/UseCases";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function AudienceX() {
  const cardsData = [
    {
      title: "InsightX Audience Segmentation",
      image: "/insightx1.png",
      index: 1,
    },
    {
      title: "Right media placement selection",
      image: "/insightx2.png",
      index: 2,
    },
    {
      title: "Creative adaption into innovation",
      image: "/insightx3.png",
      index: 3,
    },
    {
      title: "Build Reach  & Frequency among Audience",
      image: "/insightx4.png",
      index: 4,
    },
    {
      title: "Optimise & win big auction ",
      image: "/insightx5.png",
      index: 5,
    },
    {
      title: "Drive Brand Matrix",
      image: "/insightx6.png",
      index: 6,
    },
    {
      title: "Third Party Lift Studies",
      image: "/insightx7.png",
      index: 7,
    },
  ];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Set up timer to cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [cardsData.length]);
  return (
    <main className="bg-primary text-white  w-full overflow-hidden">
      <div className="container mx-auto px-6 py-8 flex flex-col justify-between h-screen mt-10">
        {/* Top tagline */}
        <div className="mt-6">
          <p className="text-lg text-center sm:text-3xl md:text-4xl font-bold">
            Your Audience + Our creativity and Intelligence
          </p>
        </div>

        {/* Main hero content */}
        <div className="flex items-center justify-center">
          <div className="relative max-w-lg">
            <img
              src="/audienceximage.png"
              alt="Woman with megaphone and shopping bag"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="">
            <h2 className="text-2xl  md:text-7xl lg:text-8xl font-bold text-center">
              AudienceX
            </h2>
            <p className="text-sm md:text-base text-center mt-2">
              Distribute your brand across your audiences
            </p>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="text-xs sm:text-sm md:text-base text-center md:text-left">
            Audience planning <span className="px-1">—</span> Segment
            integration <span className="px-1">—</span> Creative
          </p>
          <p className="text-xs sm:text-sm md:text-base text-center">
            Innovations = Driving brand metrics
          </p>
          <p className="text-xs sm:text-sm md:text-base text-center md:text-right">
            AudienceX does it all like a pro.
          </p>
        </div>
      </div>
      <div className="relative mt-10 md:mt-24 flex justify-center bg-primary">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {/* Only show the current card */}
            <Card
              key={cardsData[currentCardIndex].index}
              {...cardsData[currentCardIndex]}
            />
          </AnimatePresence>
        </div>
      </div>
      <GradientCards />
      <UseCasesLayout />
      <Footer />
    </main>
  );
}

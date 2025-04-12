import { Card } from "@/components/custom/Card";
import GradientCards from "@/components/custom/Gradient";
import Footer from "@/layout/Footer";
import UseCasesLayout from "@/layout/UseCases";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NativeHub() {
  const cardData = [
    {
      title: "Precise targeting",
      description: "Identify ideal customer segments with data-driven insights",
      path: "/Object1.svg",
    },
    {
      title: "Media landscape optimisation",
      description:
        "Strategic placement across digital and traditional channels",
      path: "/Object2.svg",
    },
    {
      title: "Better brand recall through creative innovations",
      description: "Memorable campaigns that resonate with your audience",
      path: "/Object3.svg",
    },
    {
      title: "Focused towards brand goals",
      description: "Align marketing efforts with core business objectives",
      path: "/Object4.svg",
    },
    {
      title: "Optimize ROI: pinpoint audience, choose media, refine bids",
      description:
        "Maximize return on marketing investment with strategic allocation",
      path: "/Object5.svg",
    },
  ];
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
    <main className="bg-primary text-white w-full overflow-hidden">
      {/* Hero Section - Changed from absolute to relative positioning */}
      <section className="relative w-full min-h-screen flex flex-col md:flex-row-reverse md:justify-between md:py-16 bg-primary">
        <div className="transform space-y-2 md:space-y-6 mt-10 md:mt-40 px-4">
          <h1 className="text-2xl md:text-8xl font-extrabold">
            <span className="text-secondary">NativeHUB</span>
            <br />
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-normal">
            All native in one place Planning Execution
          </p>
          <p className="text-xl md:text-2xl text-accent font-normal">
            Unified Optimisation
          </p>

          <Link
            to={"/nativehub"}
            className="inline-block bg-primary text-secondary border-accent border-solid border-2 font-bold font-sans rounded-full px-4 py-2 md:px-8 md:py-3"
          >
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-start md:justify-center h-full">
          <div className="md:w-full w-full scale-x-[-1] mt-4 md:mt-0">
            <img
              src="/NativeHUB.png"
              alt="NativeHUB"
              className="max-w-full h-auto"
            />
          </div>
          <div className="mt-2 md:mt-6 text-center md:text-left">
            <p className="text-lg md:text-4xl text-secondary md:text-accent font-bold bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent">
              Mid Funnel = Consideration{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative w-full py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-secondary mb-8 text-center">
            Our Solutions
          </h2>
          <AnimatePresence mode="wait">
            <Card
              key={cardsData[currentCardIndex].index}
              {...cardsData[currentCardIndex]}
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Additional Sections */}
      <GradientCards cardData={cardData} />
      <UseCasesLayout />
      <Footer />
    </main>
  );
}

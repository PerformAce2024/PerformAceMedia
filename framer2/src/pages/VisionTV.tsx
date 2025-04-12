import GradientCards from "@/components/custom/Gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Footer from "@/layout/Footer";
import UseCasesLayout from "@/layout/UseCases";
import { useEffect, useState } from "react";

export default function VisionTV() {
  const cardData = [
    {
      title: "Precise targeting",
      description: "Identify ideal customer segments with data-driven insights",
      path: "/Group.svg",
    },
    {
      title: "Media landscape optimisation",
      description:
        "Strategic placement across digital and traditional channels",
      path: "/visiontv-2.svg",
    },
    {
      title: "Better brand recall through creative innovations",
      description: "Memorable campaigns that resonate with your audience",
      path: "/visiontv-3.svg",
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
  const [, setCurrentCardIndex] = useState(0);
  const steps = [
    { number: "01", text: "Target by household, device type, and geography" },
    { number: "02", text: "Target by household, device type, and geography" },
    { number: "03", text: "Target by household, device type, and geography" },
    { number: "04", text: "Target by household, device type, and geography" },
  ];
  // Set up timer to cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [cardsData.length]);

  return (
    <main className="bg-primary text-white w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row bg-black min-h-screen">
        {/* Left content side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-16 lg:py-0">
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-4 sm:mb-6">
              VisionTV
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-normal">
              Big Screen Brilliance
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-white font-normal mt-1">
              Digital Precision
            </p>
          </div>
        </div>

        {/* Right image side */}
        <div className="w-full lg:w-1/2 bg-red-600 relative">
          <div className="w-full h-full min-h-[300px] lg:min-h-0 flex lg:items-center justify-center">
            {/* Visual content for right side */}
            <img
              src="visionTV2.svg"
              alt="VisionTV"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cards Section - Now properly positioned */}
      {/* <section className="relative w-full py-16 bg-primary">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <Card
              key={cardsData[currentCardIndex].index}
              {...cardsData[currentCardIndex]}
            />
          </AnimatePresence>
        </div>
      </section> */}
      <CardSpotlight color="#ef4444">
        <div className="bg-black text-white p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            How VisionTV <br></br> Works
          </h2>

          <div className="flex flex-col items-center gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-center gap-6">
                <div className="text-6xl font-bold text-gray-800 leading-none min-w-16">
                  {step.number}
                </div>
                <div className="pt-2">
                  <p className="text-lg">
                    <span className="text-red-600 font-bold">Target</span>
                    {" " + step.text.substring(6)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardSpotlight>
      <GradientCards cardData={cardData} />
      <UseCasesLayout />
      <Footer />
    </main>
  );
}

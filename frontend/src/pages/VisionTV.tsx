import GradientCards from "@/components/custom/Gradient";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Footer from "@/layout/Footer";
import UseCasesLayout from "@/layout/UseCases";

export default function VisionTV() {
  const caseStudies = [
    {
      id: 1,
      image: "/usecase3.png",
    },
    {
      id: 2,
      image: "/usecase4.png",
    },
  ];
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
  const steps = [
    { number: "01", text: "Target by shousehold, device type, and geography" },
    { number: "02", text: "Sync messaging across CTV, mobile, and tablet" },
    {
      number: "03",
      text: "Optimize campaigns using programmatic buying and real-time reporting",
    },
    {
      number: "04",
      text: "Analyze performance with deep, cross-device insights",
    },
  ];
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

      <CardSpotlight color="#ef4444">
        <div className="bg-black text-white p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-6xl sm:text-3xl font-bold mb-6 sm:mb-10">
            How VisionTV <br></br> Works
          </h2>

          <div className="flex flex-col items-start gap-6 sm:gap-8">
            {steps.map((step) => {
              // Split the text by space to get the first word
              const words = step.text.split(" ");
              const firstWord = words[0];
              const restOfText = words.slice(1).join(" ");

              return (
                <div key={step.number} className="flex items-center w-full">
                  <div className="text-6xl sm:text-8xl md:text-9xl lg:text-[200px] font-bold text-gray-800 leading-none mr-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12">
                    {step.number}
                  </div>
                  <div className="pt-2 flex-1">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      <span className="text-red-600 font-bold">
                        {firstWord}
                      </span>
                      {" " + restOfText}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardSpotlight>
      <GradientCards cardData={cardData} />
      <UseCasesLayout caseStudies={caseStudies} />
      <Footer />
    </main>
  );
}
